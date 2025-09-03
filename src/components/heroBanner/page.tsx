import React from "react";
import Image from "next/image";
import bannerImage from "../../../public/assets/images/Business merger-amico.png";
import Button from "@/common/button/page";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Image
          src={bannerImage}
          alt="People connecting illustration"
          width={400}
          height={400}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold leading-tight">
            Find Your People. Build Real Connections.
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Join a verified community of like-minded individuals — whether
            you’re looking for a partner, exploring entrepreneurship, or
            preparing for interviews. No spam, no bots, just genuine
            conversations.
          </p>
          <div className="flex gap-4">
            <Link href="/login">
              <Button children="Get Started" size="lg" />
            </Link>
            <Link href="#instructions">
              <Button children="Watch Demo" variant="outline" size="lg" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
