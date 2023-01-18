// TODO: move all mock data to outer constants file
const mockData= [
    {
        id: 'L18VBQAAQBAJ',
        etag: '0KIp8ABRdkk',
        volumeInfo: {
            title: 'The Psychology of Harry Potter',
            authors: ['Neil Mulholland'],
            description: 'Harry Potter has provided a portal to the wizarding world for millions of readers, but an examination of Harry, his friends and his enemies will take us on yet another journey: through the psyche of the Muggle (and wizard!) mind. The twists and turns of the series, as well as the psychological depth and complexity of J. K. Rowling’s characters, have kept fans enthralled with and puzzling over the many mysteries that permeate Hogwarts and beyond: • Do the Harry Potter books encourage disobedience? • Why is everyone so fascinated by Professor Lupin? • What exactly will Harry and his friends do when they finally pass those N.E.W.T.s? • Do even wizards live by the ticking of the clock? • Is Harry destined to end up alone? And why did it take Ron and Hermione so long to get together? Now, in The Psychology of Harry Potter, leading psychologists delve into the ultimate Chamber of Secrets, analyzing human mind and motivation by examining the themes and characters that make the Harry Potter books the bestselling fantasy series of all time. Grab a spot on the nearest couch, and settle in for some fresh revelations about our favorite young wizard!',
            categories: ["Literary Criticism"],
            imageLinks: {
                thumbnail: 'http://books.google.com/books/content?id=L18VBQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
            },
            infoLink: 'http://books.google.ru/books?id=L18VBQAAQBAJ&dq=intitle:harry&hl=&source=gbs_api',
            pageCount: 338
        }
    }
]

export default {
    // Fake API methods
    getBooks: () => { 
        return { data: { items: mockData } }
    }
}
