import React, { useState} from 'react';
import COMPPracticeListing from './COMPPracticeListing';

const PracticeListings = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
        { title: 'My new website 4', body: 'lorem ipsum...', author: 'mario', id: 4 },
        { title: 'Welcome party! 5', body: 'lorem ipsum...', author: 'yoshi', id: 5 },
        { title: 'Web dev top tips 6', body: 'lorem ipsum...', author: 'mario', id: 6 }
      ]);
    return (
        <div>
            <COMPPracticeListing blog={blogs} title="Alll blogs"/>
        </div>
    );
}


export default PracticeListings;
