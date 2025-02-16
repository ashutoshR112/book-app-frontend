import React from 'react'
import { getimageURL } from '../../utils/getimageURL';
import { FiShoppingCart } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

function SingleBook() {

const {id}=useParams();
const {data: book,isLoading,isError}=useFetchBookByIdQuery(id);

const dispatch=useDispatch()
const handleAddToCart=(pro)=>{
         dispatch(addToCart(pro))
   }

if(isLoading) return <div>Loading...</div>
if(isError) return <div>Error happending to load book info</div>
  return (
    <div className="max-w-lg shadow-md p-5">
            <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

            <div className=''>
                <div>
                    <img
                        src={`${getimageURL(book.coverImage)}`}
                        alt={book.title}
                        className="mb-8"
                    />
                </div>

                <div className='mb-5'>
                    <p className="text-gray-700 mb-2"><strong>Author:</strong> {book.author || 'admin'}</p>
                    <p className="text-gray-700 mb-4">
                        <strong>Published:</strong> {new Date(book?.createdAt).toLocaleDateString()}
                    </p>
                    <p className="text-gray-700 mb-4 capitalize">
                        <strong>Category:</strong> {book?.category}
                    </p>
                    <p className="text-gray-700"><strong>Description:</strong> {book.description}</p>
                </div>

                <button onClick={() => handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1 bg-yellow-300 rounded-md">
                    <FiShoppingCart className="" />
                    <span>Add to Cart</span>

                </button>
            </div>
        </div>
  )
}

export default SingleBook;