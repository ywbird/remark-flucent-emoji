import { findAndReplace } from 'mdast-util-find-and-replace';

import { u } from 'unist-builder';

import * as emojify from 'node-emoji';
import emojiRegex from 'emoji-regex';

const RE_EMOJI = /:\+1:|:-1:|:[\w-]+:/g;
const EMOJI_REGEX = emojiRegex();

export default function plugin() {
    return (tree) => {
        function replaceEmoji(match) {
            let got = emojify.get(match) || '';
            return got;
        }
        function applyEmoji(match) {
            const src = `https://raw.githubusercontent.com/ywbird/flucent-emoji-animated-unicode/main/assets/${getEmojiCodepoint(match)}.png`;
            const got = u('image', { url: src, alt: match, title: 'fc-emoji' });
            return got;
        }
        const replacers = [
            [RE_EMOJI, replaceEmoji],
            [EMOJI_REGEX, applyEmoji],
        ];
        findAndReplace(tree, replacers);
    };
}

function getEmojiCodepoint(emoji) {
    const codePoints = [];
    for (let i = 0; i < emoji.length; ) {
        const codePoint = emoji.codePointAt(i) || 0;
        codePoints.push(codePoint);
        i += codePoint > 0xffff ? 2 : 1;
    }
    return codePoints.map((s) => s?.toString(16)).join('-');
}
