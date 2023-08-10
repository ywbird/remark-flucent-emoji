# remark-flucent-emoji

This is a remark plugin to replace :emoji: to [Microsoft team's animated flucent emoji](https://emojipedia.org/microsoft-teams).

# usage

```js
remark().use(remarkFlucentEmoji);
```

```js
import { remark } from 'remark';
import emoji from 'remark-emoji';

const doc = 'flucent emoj 😺:+1:';
const processor = remark().use(emoji);
const file = await processor.process(doc);

console.log(String(file));
// => flucent emoj <img src="https://raw.githubusercontent.com/ywbird/flucent-emoji-animated-unicode/main/assets/1f63a.png" alt="😺" title="fc-emoji"> <img src="https://raw.githubusercontent.com/ywbird/flucent-emoji-animated-unicode/main/assets/1f44d.png" alt="👍" title="fc-emoji">
```

# CSS

Add following to `global.css`

```css
img[title='fc-emoji'] {
    height: 1.3em;
    pointer-events: none;
    display: inline-block;
    translate: 0 25%;
}
```

# Related

-   [remark-emoji](https://www.npmjs.com/package/remark-emoji)
-   [flucent-emoji](https://github.com/microsoft/fluentui-emoji/)
