# Rcf



## Install


```
npm install rcf
```


## Usage

```js
import Rcf from 'rcf';
const context = {};
ReactDOM.render(<Rcf context={context}>
  <A />
</Rcf>, mountDom);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
        <tr>
          <td>context</td>
          <td>object</td>
          <td>context object</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>string | object</td>
          <td>default: 'div'</td>
        </tr>
        <tr>
          <td>set</td>
          <td>string</td>
          <td>default: 'set'</td>
        </tr>
    </tbody>
</table>


## Test Case

```
npm run test
```

## License

Component is released under the MIT license.