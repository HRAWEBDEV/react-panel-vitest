import { screen, render } from '@testing-library/react';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
 it('should render nothing when there is no image', () => {
  const { container } = render(<ProductImageGallery imageUrls={[]} />);
  expect(container).toBeEmptyDOMElement();
 });

 it('should render images with proper src attributes', () => {
  const imagesUrls = ['test', 'testTwo'];
  render(<ProductImageGallery imageUrls={imagesUrls} />);
  const images = screen.getAllByRole('img');
  expect(images).toHaveLength(imagesUrls.length);
  images.forEach((img, i) => {
   expect(img).toHaveAttribute('src', imagesUrls[i]);
  });
 });
});
