# Rcf

[![NPM version](https://img.shields.io/npm/v/rcf.svg?style=flat)](https://npmjs.org/package/rcf)

Rcf is a react component, it uses a clear and simple way to manage your state: Do not use "this.state" and "this.setState", just use store, which is a plain object.

Put your component in Rcf and Rcf allows it to get store by "this.props.*" and set store by "this.props.set".

## Examples

http://flutejs.github.io/rcf/


## Install


```
npm install rcf
```


## Usage

```js
const A = props => <div>
  
  A:

  {props.a} 
  
  <button onClick={() => {
    props.set({
      a: props.a - 1,
    });
  }}>
    click
  </button>

</div>

const B = props => <div>
  
  B:
  
  {props.a} 

</div>


const store = {a: 1};

ReactDOM.render(<div>
  
  <Rcf store={store}>
    <A />
  </Rcf>
  
  <Rcf store={store}>
    <B />
  </Rcf>

</div>, 

mountDom);
```

http://flutejs.github.io/rcf/examples/example-a.html

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
          <td>store</td>
          <td>object</td>
          <td>"set, get" can only called by props</td>
        </tr>
        <tr>
          <td>tag</td>
          <td>string | object</td>
          <td>default: 'div', the root element
            <div> When the number of children is greater than 1, set root element to tag </div></td>
        </tr>
        <tr>
          <td>set</td>
          <td>string</td>
          <td>default: 'set', the name of set function.
      <div>If you don't want to call "this.props.set", you can set "set" to what you want, then you can use "this.props.*"</div>
</td>
        </tr>
    </tbody>
</table>