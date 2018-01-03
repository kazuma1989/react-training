import React from 'react';

function ProductRow(props) {
  const { stocked, name, price } = props.product;

  const nameElement = stocked ? name : (
    <span style={{color: 'red'}}>
      {name}
    </span>
  );

  return (
    <tr>
      <td>{nameElement}</td>
      <td>{price}</td>
    </tr>
  );
}

function ProductCategoryRow(props) {
  const { category } = props;

  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  );
}

function ProductTable(props) {
  const { products, condition } = props;

  const categorizedProducts = {
    // 'Sporting Goods': [
    //   {price: '$49.99', stocked: true, name: 'Football'},
    //   {price: '$9.99', stocked: true, name: 'Baseball'},
    //   {price: '$29.99', stocked: false, name: 'Basketball'},
    // ],
    // 'Electronics': [
    //   {price: '$99.99', stocked: true, name: 'iPod Touch'},
    //   {price: '$399.99', stocked: false, name: 'iPhone 5'},
    //   {price: '$199.99', stocked: true, name: 'Nexus 7'}
    // ],
  };
  products.forEach(product => {
    const { filterText, inStockOnly } = condition;
    const { category, name, stocked } = product;

    const containsText = name.toLowerCase().search(filterText.toLowerCase()) !== -1;
    if (!containsText) {
      return;
    }

    if (inStockOnly) {
      if (!stocked) {
        return;
      }
    }

    if (!categorizedProducts[category]) {
      categorizedProducts[category] = [];
    }
    categorizedProducts[category].push(product);
  });

  const tbodyList = [];
  for (const category in categorizedProducts) {
    const productsInCategory = categorizedProducts[category];
    tbodyList.push(
      <tbody key={category}>
        <ProductCategoryRow category={category} />

        {productsInCategory.map(product => (
          <ProductRow
            key={product.name}
            product={product}
            />
        ))}
      </tbody>
    );
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      {tbodyList}
    </table>
  );
}

function SearchBar(props) {
  const { filterText, inStockOnly, onFilterTextChange, onInStockChange } = props;

  return (
    <div>
      <input type="text" placeholder="Search..." value={filterText} onChange={onFilterTextChange} />
      <label style={{display: 'block'}}>
        <input type="checkbox" checked={inStockOnly} onChange={onInStockChange} />
        Only show products in stock
      </label>
    </div>
  );
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    const { value } = e.target;
    this.setState({
      filterText: value
    });
  }

  handleInStockChange(e) {
    const { checked } = e.target;
    this.setState({
      inStockOnly: checked
    });
  }

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state

    const condition = {
      filterText,
      inStockOnly,
    };

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          condition={condition}
        />
      </div>
    );
  }
}

const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

export const filterableProductTable = <FilterableProductTable products={PRODUCTS} />;
