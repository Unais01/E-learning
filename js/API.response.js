const contentContainer = document.getElementById('contentfulData');

const client = contentful.createClient({
  space: 'kyy005jc238v',
  accessToken: 'AR-s1eZ-tUza-bL7XWyug3AIuGVHJcZayeielkBgPmA'
});

async function fetchContent() {
  try {
    const response = await client.getEntries({
      content_type: 'questionPaper'

    });
    let pdfUrl = response.items[0].fields.paperPdf.fields.file.url;
    window.open(pdfUrl, '_blank');
    // displayContent(response.items);
  } catch (error) {
    console.error('Error fetching Contentful content:', error);
  }
}



// Call fetchContent function to retrieve content
fetchContent();


