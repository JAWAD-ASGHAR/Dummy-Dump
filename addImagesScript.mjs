import { readFileSync, writeFileSync } from 'fs';
import axios from 'axios';

// Your Google Custom Search API key and Search Engine ID
const API_KEY = process.env.GOOGLE_CUSTOM_SEARCH_API_KEY;
const CX = process.env.GOOGLE_CUSTOM_SEARCH_CX;

// Read products from JSON file
const products = JSON.parse(readFileSync('./Data/products.json', 'utf8'));

// Function to fetch image URL for a product
async function fetchImageURL(productName) {
  const query = encodeURIComponent(productName);
  const url = `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CX}&key=${API_KEY}&searchType=image&num=1`;

  try {
    const response = await axios.get(url);
    const imageUrl = response.data.items[0]?.link;
    return imageUrl || "No image found";
  } catch (error) {
    console.error(`Error fetching image for ${productName}:`, error.message);
    return "Error fetching image";
  }
}

// Main function to process all products
async function fetchAllImages(products) {
  const results = [];

  for (const product of products) {
    const imageUrl = await fetchImageURL(product.name);
    results.push({ ...product, imageUrl });
  }

  // Save updated products with image URLs to a new JSON file
  writeFileSync('./Data/products_with_images-2.json', JSON.stringify(results, null, 2));
  console.log('Products updated with image URLs and saved to products_with_images.json');
}

// Run the script
fetchAllImages(products);
