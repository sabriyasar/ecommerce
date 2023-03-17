import React, { useEffect, useState } from "react"
import {useGetProductsAllQuery} from "../redux/products/products.api"
import {ProductItem} from "../components/product-item/ProductItem"
import {Loader} from "../components/loader/Loader"
import {ProductFilters} from "../components/product-filters/ProductFilters"
import {useSelector} from "react-redux"
import { CartEmpty } from "../components/cart-shopping/CartEmpty"
import ReactPaginate from "react-paginate";

export function HomePage() {
    const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `https://5fc9346b2af77700165ae514.mockapi.io/products?_page=1&_limit=10`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getProducts();
  }, [limit]);

  console.log(items)

  const fetchProducts = async (currentPage) => {
    const res = await fetch(
      `https://5fc9346b2af77700165ae514.mockapi.io/products?_page=${currentPage}&_limit=10`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const productsFormServer = await fetchProducts(currentPage);

    setItems(productsFormServer);
  };

    const { data, error, isLoading, status } = useGetProductsAllQuery()
    const {filters, searchFilterProducts} = useSelector(state => state.product)

    const filterByCategory = (category) => {
        return data?.filter(product => product.category === category)
            .map(product => <ProductItem product={product} key={product.id} />)
    }

    const filterSearch = data => {
        if (data.length > 0) {
            return data.map(product => <ProductItem product={product} key={product.id}/>)
        } else {
            return <p className='mt-[30px] mx-auto'>Ürün bulunamadı...</p>
        }
    }

    const renderProducts = () => {
        if (filters.category) return filterByCategory(filters.category)
        if (searchFilterProducts) return filterSearch(searchFilterProducts)

        return data?.map(product => <ProductItem product={product} key={product.id}/>)
    }

    return (
        <>
            <div className='container mb-[20px] mt-[60px] max-w-[1340px] flex flex-col justify-center items-center xl:flex xl:justify-center xl:flex-row xl:items-start mx-auto transition-all flex-auto'>
                {isLoading && <Loader />}
                {error && <p className='text-center mt-4'>{error.error}</p>}
                {status === 'fulfilled' &&
                    <>
                        <div className='lg:w-3/5 xl:w-1/5 flex flex-col items-center'>
                            <ProductFilters/>
                        </div>
                        <div className='grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            {renderProducts()}
                        </div>
                        <div className='lg:w-3/5 xl:w-1/5 flex flex-col items-center'>
                            <CartEmpty/>
                        </div>
                    </>
                }
            </div>
            <div className="container">
            <div className="row m-2">
      </div>

<ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      </div>
        </>
    )
}

