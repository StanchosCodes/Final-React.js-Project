import { useEffect, useState } from 'react';

import * as bookService from '../services/bookService';

import RecentBook from './RecentBook';

export default function Home() {
    const [recentBooks, setRecentBooks] = useState([]);

    useEffect(() => {
        bookService.getRecent()
            .then(result => {
                setRecentBooks(result);
            });
    }, []);

    return (
        <>
            <div id="templatemo_content">

                <div id="templatemo_content_right">
                    {recentBooks.map(book => <RecentBook key={book._id} {...book} />)}

                    {!recentBooks.length && <h1>No books yet! Come back later!</h1>}
                    
                    <img className='advertise' src="images/templatemo_ads.jpg" alt="ads" />
                </div>
            
                <div className="cleaner_with_height">&nbsp;</div>
                
            </div>
        </>
    );
}