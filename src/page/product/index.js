import ListProduct from "../../componets/product/ListProduct"

function ProductList() {
    return <div style={{ margin: "20px" }}>
        <h3 style={{
            margin: '0 20px',
            color: 'black'
        }}>List Product</h3>
        <ListProduct />
    </div>
}
export default ProductList