import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 py-10 px-10 mt-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>BLOG OF THE FUTURE</h4>
          <p className='my-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis 
            augue ut nulla lobortis, in egestas erat commodo. Nullam ut mattis lorem. 
            Vestibulum convallis elit vel sapien rhoncus, sed bibendum elit porttitor. 
            Curabitur ac quam tincidunt, luctus lorem in, facilisis metus. Maecenas non 
            lectus eu ipsum congue molestie.
          </p>
          <p>© Blog of the Future All Rights Reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Links</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet</p>
          <p className='my-5'>Some random links again</p>
          <p>Ullamcorper vivamus</p>
        </div>
        {/* THIRD COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>Contact Us</h4>
          <p className='my-5'>Lorem ipsum dolor sit amet</p>
          <p className='my-5'>Some random links again</p>
          <p>(+61) 456-789-012</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer