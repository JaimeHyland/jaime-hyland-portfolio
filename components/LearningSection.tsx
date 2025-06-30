'use client';
import { useState } from 'react';
import EducationModal from './EducationModal';

interface InstitutionProps {
  title: string;
  img: string;
  alt: string;
  content: React.ReactNode;
}

export default function LearningSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<InstitutionProps>({
  title: '',
  img: '',
  alt: '',
  content: null,
});

  const handleClick = (institution: InstitutionProps) => {
    setModalContent(institution);
    setModalOpen(true);
  };

  const institutions = [
    {
      title: 'FÁS',
      img: '/images/Logo-fas_s2.png',
      alt: 'FÁS',
      content: (
        <p>FÁS was the Irish National Training Authority at the time I did foundational training in computing and office tech there.
            It has since been replaced by
          <a
            href="https://www.solas.ie/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer">Solas
          </a>.
        </p>
      ),
    },
    {
      title: 'Trinity College Dublin',
      img: '/images/Trinity_shield.png',
      alt: 'Trinity College Dublin',
      content: (
        <p>I studied Philosophy (or &quot;Mental and Moral Science&quot;, as the degree course is still called) at
          <a
            href="https://www.tcd.ie/"
            className="text-blue-600 underline"
            target="_blank" 
            rel="noopener noreferrer">Trinity College Dublin
          </a>
          . Back in ancient history (1984 to 1988), I did quite a lot of work there on philosophy of logic and mathematics.
        </p>
      ),
    },
    {
      title: 'Code Institute',
      img: '/images/code_institute.png',
      alt: 'Code Institute',
      content: (
        <p>I completed an online 
          <a
            href="https://codeinstitute.net/de/full-stack-software-development-diploma-3/"
            className="text-blue-600 underline"
            target="_blank" rel="noopener noreferrer">full-stack software development diploma
          </a>at the excellent Dublin-based educator Code Institute from 2023 to the end of 2024.
            The course put a particular emphasis on the Python language
            for the modern web, leveraging the Django and Bootstrap frameworks.
            My specialized final portfolio project was an e-Commerce site, using 
            Stripe as its online payment system. 
        </p>
      ),
    },
    {
      title: 'Khan Academy',
      img: '/images/khan-academy-solid.png',
      alt: 'Khan Academy',
      content: (
        <p>
          <a href="https://www.khanacademy.org/"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer">
              Khan Academy
          </a>
            is an excellent resource for IT training and Maths education.
            I&apos;ve used it so far in self-training in Computer Science Theory, 
            JavaScript programming, Statistics and Calculus.
        </p>
      ),
    },
    {
      title: 'Codefinity',
      img: '/images/codefinity_bw.png',
      alt: 'Codefinity',
      content: (
        <p>
          <a
          href="https://www.khanacademy.org/"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer">
            Codefinity
          </a>
            is yet another excellent resource for IT training.
            So far, I&apos;ve been using it for a variety of learning materials,
            with a special emphasis on Python.
        </p>
      ),
    },
    {
      title: 'Brilliant',
      img: '/images/brilliant_bw.png',
      alt: 'Brilliant',
      content: (
        <p>
          <a 
          href="https://brilliant.org/"
          target="_blank"
          className="text-blue-600 underline"
          rel="noopener noreferrer">
            Brilliant
          </a>
            is my go-to place when I want to take a short, but productive break.
            I&apos;ve been using it so far mainly to revise my old school general maths,
            and to learn a little about electrical circuits,
            which has been a closed book to me all my life.
        </p>
      ),
    },
    {
      title: 'KodeKloud',
      img: '/images/kodekloud_bw.png',
      alt: 'Brilliant',
      content: (
        <p>
          I&apos;ve been using <a
          href="https://kodekloud.com/"
          target="_blank"
          className="text-blue-600 underline"
          rel="noopener noreferrer">
            KodeKloud
          </a>
            on and off to improve my as yet fairly primitive understanding of Linux. It&apos;s an excellent
            provider of training &mdash; in DevOps in particular.
        </p>
      ),
    },
    {
      title: 'LeetCode',
      img: '/images/leetcode.png',
      alt: 'LeetCode',
      content: (
        <p>
          I&apos;ve been using
          <a
          href="https://leetcode.com/"
          target="_blank"
          className="text-blue-600 underline"
          rel="noopener noreferrer">
            LeetCode
          </a>
            mainly to get a grip on some of the common questions that might come up for me when applying 
            for a job as a full-stack web programmer.
        </p>
      ),
    },
    {
      title: 'LinkedIn Learning',
      img: '/images/linkedin-learning.png',
      alt: 'LinkedIn Learning',
      content: (
        <p>
          <a href="https://www.linkedin.com/learning/" target="_blank" rel="noopener noreferrer">LinkedIn Learning</a>
            provides a wide variety of courses on the whole gamut of professional disciplines that one may
            need to learn in the IT industry and elsewhere. It is the product of LinkedIn&apos;s purchase of the
            famous Lynda.com IT training provider Lynda.com.  So far, I&apos;ve used it mostly to get a grip on 
            Dart/Flutter.
        </p>
      ),
    },
    {
      title: 'freecodecamp',
      img: '/images/freecodecamp-icon.svg',
      alt: 'freecodecamp',
      content: (
        <p>
          <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">freecodecamp</a>
            is my original provider of many of my basic skills on web development. I&apos;ve got enormous mileage
            out of its Certified Full Stack Developer Curriculum (though it&apos;s still in Beta testing at time of
            writing).
        </p>
      ),
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Some of the places where I&apos;ve done my learning</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {institutions.map((inst, index) => (
          <div
            key={index}
            className="flex items-center justify-center h-28 w-full cursor-pointer"
            title={inst.alt}
            onClick={() => handleClick(inst)}
          >
            <img
              src={inst.img}
              alt={inst.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <EducationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalContent.title}
        content={modalContent.content}
      />
    </section>
  );
}
