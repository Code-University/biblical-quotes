'use client';

import Image from 'next/image';

type BackgroundImageProps = {
  imageName?: string;
  alt?: string;
};

export default function BackgroundImage({
  imageName,
  alt = 'Background image',
}: BackgroundImageProps) {
  const basePath = `/images/backgrounds/${imageName}`;

  return (
    <div className="absolute inset-0 w-full h-full -z-10 blur-sm brightness-45">
      <Image
        src={`${basePath}/img-2880.jpg`} // largest version
        alt={alt}
        placeholder="blur"
        blurDataURL={`${basePath}/img-36.jpg`} // your tiny image
        fill
        sizes="
          (max-width: 480px) 360px,
          (max-width: 768px) 540px,
          (max-width: 1024px) 720px,
          (max-width: 1280px) 900px,
          (max-width: 1440px) 1080px,
          (max-width: 1920px) 1440px,
          (max-width: 2560px) 2160px,
          2880px
        "
        className="object-cover object-center"
        priority
      />
    </div>
  );
}
