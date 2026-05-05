"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmallSizeLargeTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Why Us",
          id: "#why-us",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Roto-Rooter"
      button={{
        text: "Call Now",
        href: "tel:5550199",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="24/7 Emergency Plumbing Services in Omaha"
      description="Fast response. Trusted experts. Upfront pricing. Serving your community since 1935 with reliability you can count on."
      buttons={[
        {
          text: "Call Now",
          href: "tel:5550199",
        },
        {
          text: "Book Service",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/builder-man-wearing-construction-uniform-security-helmet-standing-with-hands-raised-holding-hammer-adjustable-wrench-threatening-pose-having-fun-isolated-blue-wall_141793-14163.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/expressive-young-man-posing-winter-holidays_140725-138538.jpg",
          alt: "Expressive young man posing for winter holidays",
        },
        {
          src: "http://img.b2bpic.net/free-photo/builder-man-wearing-construction-uniform-security-helmet-holding-wrench-hammer-hands-with-smile-face-looking-confident-standing-isolated-orange-wall_141793-14010.jpg",
          alt: "Builder man in construction uniform",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-bearded-builder-man-construction-uniform-safety-helmet-swinging-wrench-with-aggressive-expression_141793-30192.jpg",
          alt: "Young bearded builder man",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-people-occupation-maintenance-service_343059-3492.jpg",
          alt: "Senior people maintenance service",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-man-posing-studio_23-2150275711.jpg",
          alt: "Professional technician portrait",
        },
      ]}
      avatarText="Join 3,500+ local customers"
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "24/7 Emergency Support",
        },
        {
          type: "text",
          text: "Upfront Pricing",
        },
        {
          type: "text",
          text: "Locally Owned",
        },
        {
          type: "text",
          text: "Family Operated",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split-description"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      features={[
        {
          title: "Drain Cleaning",
          description: "Unclogging drains and sewer lines with professional equipment.",
          imageSrc: "http://img.b2bpic.net/free-photo/prosthetist-man-making-prosthetic-leg-while-working-laboratory_627829-7187.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/force-cup-white_23-2147772259.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Water Heater Repair",
          description: "Expert repairs and installations for all types of water heaters.",
          imageSrc: "http://img.b2bpic.net/free-photo/male-plumber-working-fix-problems-client-s-house_23-2150990696.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/electrician-working-air-conditioner_482257-96273.jpg",
          buttonText: "Learn More",
        },
        {
          title: "Leak Detection",
          description: "Finding and repairing hidden leaks before they cause damage.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-engaged-household-tasks-scenery_23-2151741189.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-working-as-plumber_23-2150746299.jpg",
          buttonText: "Learn More",
        },
      ]}
      title="Our Plumbing Services"
      description="Comprehensive solutions for all your residential and commercial plumbing needs."
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Trusted Experts Since 1935",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/plumbing-professional-doing-his-job_23-2150721528.jpg",
        },
      ]}
      buttons={[
        {
          text: "Learn About Our History",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah J.",
          handle: "@sarahj",
          testimonial: "The staff was so polite and got the job done fast!",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-as-plumber_23-2150746290.jpg",
        },
        {
          id: "2",
          name: "Mike D.",
          handle: "@miked",
          testimonial: "Problem was solved quickly and at a fair price.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-young-musician-woman-learns-how-play-ukulele-sits-sofa-with-crossed-legs_1258-204931.jpg",
        },
        {
          id: "3",
          name: "Emily R.",
          handle: "@emilyr",
          testimonial: "Best service in town. Highly professional.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-workers-cooperating-shaking-hands_329181-15679.jpg",
        },
        {
          id: "4",
          name: "David K.",
          handle: "@davidk",
          testimonial: "Responsive and friendly technicians.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-adult-daughter-mature-father-meeting-with-family-consultant-co-working-shaking-hands_74855-15154.jpg",
        },
        {
          id: "5",
          name: "Linda M.",
          handle: "@lindam",
          testimonial: "Saved my day during an emergency leak.",
          imageSrc: "http://img.b2bpic.net/free-photo/drawing-women-high-fiving_23-2147770093.jpg",
        },
      ]}
      title="What Our Customers Say"
      description="Join 3,500+ satisfied homeowners who trust us for their plumbing needs."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Why Choose Us"
      tag="Reliability Metrics"
      metrics={[
        {
          id: "1",
          value: "90+",
          description: "Years of Experience",
        },
        {
          id: "2",
          value: "4.7⭐",
          description: "Average Rating",
        },
        {
          id: "3",
          value: "3,500+",
          description: "Happy Clients",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split-description"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you offer emergency services?",
          content: "Yes, we are available 24/7 for all plumbing emergencies.",
        },
        {
          id: "2",
          title: "Are you licensed and insured?",
          content: "Yes, all our technicians are fully licensed and insured.",
        },
        {
          id: "3",
          title: "Do you provide upfront pricing?",
          content: "Absolutely. We provide clear, upfront pricing before we start any work.",
        },
      ]}
      title="Common Questions"
      description="Answers to help you understand our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get Help Now"
      description="Fill out the form and our team will reach out as quickly as possible."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Describe your plumbing issue here...",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/kitchen-utensils-stainless-steel_93675-135603.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Roto-Rooter"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Service Areas",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Drain Cleaning",
              href: "#services",
            },
            {
              label: "Repair",
              href: "#services",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
