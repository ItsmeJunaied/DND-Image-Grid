
import './App.css'
import img1 from '../public/photos/image-1.webp';
import img2 from '../public/photos/image-2.webp';
import img3 from '../public/photos/image-3.webp';
import img4 from '../public/photos/image-4.webp';
import img5 from '../public/photos/image-5.webp';
import img6 from '../public/photos/image-6.webp';
import img7 from '../public/photos/image-7.webp';
import img8 from '../public/photos/image-8.webp';
import img9 from '../public/photos/image-9.webp';
import img10 from '../public/photos/image-10.jpeg';
import img11 from '../public/photos/image-11.jpeg';
import { useState } from 'react';

function App() {

  const images = [
    {
      name: 'Image 1',
      src: img1
    },
    {
      name: 'Image 2',
      src: img2
    },
    {
      name: 'Image 3',
      src: img3
    },
    {
      name: 'Image 4',
      src: img4
    },
    {
      name: 'Image 5',
      src: img5
    },
    {
      name: 'Image 6',
      src: img6
    },
    {
      name: 'Image 7',
      src: img7
    },
    {
      name: 'Image 8',
      src: img8
    },
    {
      name: 'Image 9',
      src: img9
    },
    {
      name: 'Image 10',
      src: img10
    },
    {
      name: 'Image 11',
      src: img11
    }
  ];

  const [selectedIndex, setSelectedIndex] = useState([]);
  console.log(selectedIndex);

  const handleSelectImage = (index) => {
    setSelectedIndex(prevState => {
      if (prevState.includes(index)) {
        return prevState.filter(item => item !== index);
      } else {
        return [...prevState, index];
      }
    });
  }

  const handleDeleteImage = () => {
    // if indexes matches with the index numer with database then delete
  }
  return (
    <div className=' bg-zinc-300 px-[100px] py-[100px]'>
      <div className='container mx-auto bg-white rounded-xl px-[100px] py-[100px]'>
        <div className=' flex flex-row justify-between items-center '>
          <h1 className=' text-lg font-semibold'>Total Selected - {selectedIndex.length}</h1>

          <button onClick={handleDeleteImage}>
            <p className=' text-lg font-semibold text-red-500'>Delete Image</p>
          </button>
        </div>
        <div className=' divider text-black'></div>
        <div className='grid grid-cols-4 gap-5  '>
          {images.map((image, index) => (
            <div key={index} className={`relative group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <input
                onClick={() => handleSelectImage(index)}
                type="checkbox"
                className={`absolute top-4 left-4 opacity-0 group-hover:opacity-100 w-6 h-6 z-10 ${selectedIndex.includes(index) ? 'checked opacity-100' : ''}`}
              />
              <div className="relative">
                <img className='border border-black rounded-[18px] w-200 h-150' src={image.src} alt={image.name} />
                <div className="absolute inset-0 bg-black rounded-[18px] opacity-0 group-hover:opacity-50"></div>
              </div>
            </div>
          ))}


          <div className="flex items-center justify-center w-full col-span-1 row-span-1">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-lg font-semibold text-gray-500 ">Add Images</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>


        </div>


      </div>
    </div>
  )
}

export default App
