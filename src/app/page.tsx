import Hero from '@/components/Hero';
import BrandIntro from '@/components/BrandIntro';
import ImageGallery from '@/components/ImageGallery';
import LifestyleSection from '@/components/LifestyleSection';
import FeaturedProducts from '@/components/FeaturedProducts';
// import AboutTeaser from '@/components/AboutTeaser';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <FeaturedProducts />
      <LifestyleSection />
      {/* <AboutTeaser /> */}
      <ImageGallery />
      <Newsletter />
      <Footer />
    </>
  );
}
