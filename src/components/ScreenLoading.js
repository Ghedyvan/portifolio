'use client'

import Image from "next/image";
import LogoBranca from "@/assets/mylinks/GVlogo.svg";
import { motion } from "framer-motion";
import Signature from "@/assets/signarute.svg";
import gsap from "gsap";
import { useEffect } from "react";

const pathVariants = {
  hidden: {
    pathLenght: 0,
    opacity: 0,
    fill: "none",
  },
  visible: {
    opacity: 1,
    pathLenght: 1,
    fill: "white",
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Background() {

  useEffect(() => {
    gsap.fromTo(
      ".salve",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 3.5 }
    );
  }, []);

  return (
    <div className="w-full divback flex-col h-screen absolute top-0 left-0 flex items-center justify-center salve overflow-hidden">
      <motion.svg
        viewBox="0 0 426 357"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"
        className="max-w-[80px] mb-4"
      >
        <motion.path
          fill="none"
          d="M425.5 0H0L150 255L240.5 102H166.5L150 129L112 63H390.5L425.5"
          variants={pathVariants}
        />
        <motion.path
          fill="none"
          d="M364.5 102H290.5L174 294L212.5 357L364.5 102Z"
          variants={pathVariants}
        />
      </motion.svg>
      <motion.svg
        initial="hidden"
        animate="visible"
        viewBox="0 0 182 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="182"
        height="51"
      >
        <motion.path
          fill="none"
          d="M22.88 20.266C23.0187 20.318 23.114 20.4047 23.166 20.526C23.2353 20.6473 23.244 20.7773 23.192 20.916C23.14 21.0373 23.0533 21.124 22.932 21.176C22.048 21.5747 20.358 21.9387 17.862 22.268C17.2033 25.1973 16.5533 28.482 15.912 32.122C15.2707 35.762 14.8547 38.4833 14.664 40.286C14.8027 40.2167 14.9413 40.208 15.08 40.26C15.1667 40.2947 15.236 40.3467 15.288 40.416C15.3573 40.4853 15.392 40.5547 15.392 40.624C15.4093 40.7107 15.4093 40.806 15.392 40.91C15.1667 41.5167 14.976 41.95 14.82 42.21C14.664 42.4873 14.4733 42.626 14.248 42.626C14.196 42.626 14.1353 42.6173 14.066 42.6C13.806 42.5133 13.65 42.2793 13.598 41.898C13.5633 41.5167 13.6067 40.78 13.728 39.688C13.884 38.3187 14.1527 36.4813 14.534 34.176C15.0367 31.1773 15.6087 28.1527 16.25 25.102C14.0313 29.158 11.83 32.1913 9.646 34.202C7.47933 36.2127 5.59867 36.9233 4.004 36.334C2.51333 35.7793 1.638 34.202 1.378 31.602C1.118 29.0193 1.51667 25.778 2.574 21.878C3.37133 18.9487 4.72333 15.6207 6.63 11.894C8.554 8.15 10.478 5.25533 12.402 3.21C13.1993 2.36067 13.988 1.79733 14.768 1.52C15.5653 1.24267 16.2673 1.26867 16.874 1.598C17.134 1.754 17.368 1.97067 17.576 2.248C17.8013 2.508 18.0093 2.93267 18.2 3.522C18.3907 4.11133 18.4947 4.81333 18.512 5.628C18.5467 6.44267 18.4687 7.51733 18.278 8.852C18.1047 10.1867 17.7927 11.6773 17.342 13.324C17.3073 13.4627 17.2293 13.5667 17.108 13.636C16.9867 13.7053 16.8567 13.7227 16.718 13.688C16.5967 13.6533 16.5013 13.5753 16.432 13.454C16.3627 13.3327 16.3453 13.2027 16.38 13.064C16.952 10.932 17.2987 9.07733 17.42 7.5C17.5587 5.90533 17.524 4.72667 17.316 3.964C17.1253 3.20133 16.8133 2.70733 16.38 2.482C15.9987 2.25667 15.5133 2.274 14.924 2.534C14.352 2.794 13.754 3.24467 13.13 3.886C11.258 5.87933 9.386 8.70467 7.514 12.362C5.642 16.002 4.316 19.2607 3.536 22.138C2.496 25.9687 2.106 29.106 2.366 31.55C2.59133 33.7167 3.25867 34.9993 4.368 35.398C4.68 35.5193 5.03533 35.554 5.434 35.502C5.83267 35.45 6.24867 35.32 6.682 35.112C7.13267 34.904 7.60067 34.6093 8.086 34.228C8.58867 33.8467 9.1 33.396 9.62 32.876C11.908 30.5533 14.2047 27.0693 16.51 22.424C15.7993 22.4933 14.69 22.606 13.182 22.762C10.6167 23.022 8.72733 23.2387 7.514 23.412C7.49667 23.412 7.47933 23.412 7.462 23.412C7.34067 23.412 7.228 23.3687 7.124 23.282C7.03733 23.1953 6.98533 23.0913 6.968 22.97C6.95067 22.8833 6.95933 22.7967 6.994 22.71C7.02867 22.6233 7.08067 22.554 7.15 22.502C7.21933 22.45 7.29733 22.4153 7.384 22.398C8.61467 22.242 10.5127 22.034 13.078 21.774C14.8807 21.5833 16.198 21.4447 17.03 21.358C17.03 21.3407 17.0387 21.3147 17.056 21.28C17.0733 21.228 17.0907 21.1933 17.108 21.176C17.2293 20.8987 17.4373 20.812 17.732 20.916C17.8707 20.968 17.9747 21.072 18.044 21.228C20.28 20.9333 21.7707 20.6127 22.516 20.266C22.6373 20.214 22.7587 20.214 22.88 20.266ZM36.0557 20.994C36.1944 20.9593 36.3157 20.9767 36.4197 21.046C36.541 21.1153 36.619 21.2193 36.6537 21.358C36.6884 21.4967 36.671 21.6267 36.6017 21.748C36.0297 22.6667 35.4837 23.49 34.9637 24.218C34.4437 24.9287 33.993 25.5093 33.6117 25.96C33.2477 26.3933 32.8924 26.7573 32.5457 27.052C32.199 27.364 31.9217 27.5807 31.7137 27.702C31.5057 27.8407 31.2977 27.9273 31.0897 27.962C30.8817 28.014 30.7344 28.0313 30.6477 28.014C30.5784 28.014 30.4917 28.0053 30.3877 27.988C29.573 27.78 29.1137 26.8527 29.0097 25.206C28.9924 24.842 28.949 24.5387 28.8797 24.296C28.8104 24.036 28.7497 23.8713 28.6977 23.802C28.6457 23.7153 28.6024 23.672 28.5677 23.672C28.5504 23.672 28.5417 23.672 28.5417 23.672C28.403 23.672 28.2124 23.7847 27.9697 24.01C27.727 24.218 27.4324 24.5647 27.0857 25.05C26.739 25.5353 26.375 26.1247 25.9937 26.818C25.6124 27.5113 25.1877 28.3867 24.7197 29.444C24.269 30.5013 23.827 31.6453 23.3937 32.876C23.3244 33.1013 23.1684 33.214 22.9257 33.214C22.891 33.214 22.8564 33.214 22.8217 33.214C22.735 33.1967 22.6657 33.162 22.6137 33.11C22.5444 33.058 22.4924 32.9887 22.4577 32.902C22.423 32.8327 22.4144 32.7633 22.4317 32.694C22.4664 31.9833 22.9257 29.704 23.8097 25.856C24.6764 21.9907 25.387 18.888 25.9417 16.548C26.5137 14.1907 26.9557 12.388 27.2677 11.14C27.857 8.748 28.533 6.71133 29.2957 5.03C30.0757 3.33133 30.743 2.43 31.2977 2.326C31.5924 2.274 31.8177 2.36067 31.9737 2.586C32.355 3.106 32.1297 4.44933 31.2977 6.616C30.483 8.78267 29.209 11.4347 27.4757 14.572C26.141 20.0667 25.1097 24.478 24.3817 27.806C25.1444 26.194 25.8984 24.92 26.6437 23.984C27.389 23.0307 28.0737 22.5973 28.6977 22.684C29.4777 22.788 29.911 23.6027 29.9977 25.128C30.0844 26.2893 30.2924 26.9133 30.6217 27C30.6737 27.0173 30.743 27.0173 30.8297 27C30.9337 26.9827 31.133 26.8787 31.4277 26.688C31.7224 26.4973 32.043 26.22 32.3897 25.856C32.7364 25.4747 33.2044 24.8853 33.7937 24.088C34.4004 23.2907 35.0504 22.3287 35.7437 21.202C35.813 21.098 35.917 21.0287 36.0557 20.994ZM31.1157 3.782C30.1624 5.15133 29.2697 7.41333 28.4377 10.568C29.963 7.5 30.8557 5.238 31.1157 3.782ZM43.743 21.124C43.8816 21.0893 44.003 21.1153 44.107 21.202C44.2283 21.2713 44.2976 21.3753 44.315 21.514C44.3323 21.6527 44.3063 21.774 44.237 21.878C42.2783 24.6167 40.493 26.558 38.881 27.702C38.2396 28.1527 37.607 28.378 36.983 28.378C36.4976 28.378 36.073 28.248 35.709 27.988C35.501 27.832 35.319 27.624 35.163 27.364C34.9896 27.104 34.8423 26.74 34.721 26.272C34.5996 25.804 34.5823 25.1887 34.669 24.426C34.7383 23.6633 34.929 22.7967 35.241 21.826V21.8C35.7263 20.2227 36.3156 18.9747 37.009 18.056C37.7023 17.1373 38.3263 16.6693 38.881 16.652C39.2796 16.6347 39.5396 16.808 39.661 17.172C39.8516 17.6747 39.6263 18.3853 38.985 19.304C38.3436 20.2227 37.399 21.2107 36.151 22.268C35.943 22.944 35.7956 23.568 35.709 24.14C35.6223 24.712 35.5876 25.1713 35.605 25.518C35.6396 25.8473 35.7003 26.142 35.787 26.402C35.891 26.6447 35.9776 26.818 36.047 26.922C36.1336 27.026 36.2203 27.1127 36.307 27.182C36.827 27.5633 37.4943 27.4593 38.309 26.87C39.8343 25.7953 41.533 23.9407 43.405 21.306C43.4916 21.202 43.6043 21.1413 43.743 21.124ZM38.699 17.744C38.0923 18.1253 37.4943 18.9487 36.905 20.214C37.9103 19.2087 38.5083 18.3853 38.699 17.744ZM53.9874 5.29C54.438 5.74067 54.2127 7.33533 53.3114 10.074C53.242 10.282 53.1467 10.568 53.0254 10.932C52.644 12.0933 52.332 13.0207 52.0894 13.714C51.8467 14.4073 51.4654 15.378 50.9454 16.626C50.4254 17.874 49.862 19.07 49.2554 20.214C48.7527 22.606 48.276 25.154 47.8254 27.858C47.0454 32.486 46.6294 35.6233 46.5774 37.27C46.716 37.218 46.8547 37.218 46.9934 37.27C47.1147 37.3393 47.1927 37.4347 47.2274 37.556C47.2794 37.6947 47.2794 37.8247 47.2274 37.946C46.9154 38.6047 46.6034 38.934 46.2914 38.934C46.222 38.934 46.1527 38.9253 46.0834 38.908C45.8927 38.8387 45.754 38.7087 45.6674 38.518C45.598 38.3447 45.5634 37.9633 45.5634 37.374C45.5807 36.802 45.6587 35.9527 45.7974 34.826C46.0054 33.0233 46.352 30.6487 46.8374 27.702C47.1147 26.09 47.4007 24.5213 47.6954 22.996C47.158 23.8627 46.586 24.7293 45.9794 25.596C44.8354 27.26 43.8387 27.858 42.9894 27.39C42.4347 26.9913 42.166 26.2893 42.1834 25.284C42.2007 24.2613 42.452 23.23 42.9374 22.19C43.5094 20.9767 44.1854 20.084 44.9654 19.512C45.7454 18.94 46.4387 18.7493 47.0454 18.94C47.652 19.1133 47.9987 19.564 48.0854 20.292C48.172 20.1533 48.25 20.0147 48.3194 19.876C49.238 15.5253 50.1567 12.0327 51.0754 9.398C52.0114 6.746 52.774 5.32467 53.3634 5.134C53.606 5.04733 53.814 5.09933 53.9874 5.29ZM45.1734 25.024C45.988 23.8453 46.7334 22.6667 47.4094 21.488C47.1494 21.4013 47.0454 21.228 47.0974 20.968C47.1667 20.3267 47.054 19.9627 46.7594 19.876C46.7247 19.876 46.6727 19.876 46.6034 19.876C46.2394 19.876 45.7887 20.1187 45.2514 20.604C44.7314 21.072 44.2634 21.748 43.8474 22.632C43.57 23.204 43.3794 23.7933 43.2754 24.4C43.1887 24.9893 43.1714 25.4747 43.2234 25.856C43.2754 26.22 43.3707 26.4367 43.5094 26.506C43.5614 26.5407 43.6394 26.5407 43.7434 26.506C43.8647 26.454 44.0554 26.3067 44.3154 26.064C44.5754 25.804 44.8614 25.4573 45.1734 25.024ZM52.3494 9.762C52.696 8.70467 52.9474 7.80333 53.1034 7.058C52.254 8.84333 51.344 11.6253 50.3734 15.404C50.8587 14.2253 51.422 12.6393 52.0634 10.646C52.1847 10.2647 52.28 9.97 52.3494 9.762ZM63.4378 21.072C63.5764 21.0893 63.6804 21.1587 63.7498 21.28C63.8364 21.384 63.8624 21.5053 63.8278 21.644C63.7931 21.7827 63.7238 21.8867 63.6198 21.956C60.5518 23.9493 58.0384 25.934 56.0798 27.91C55.0571 34.0287 53.9391 38.9947 52.7258 42.808C51.2871 47.2973 49.8918 49.7327 48.5398 50.114C48.4184 50.1487 48.2884 50.166 48.1498 50.166C47.7511 50.166 47.4044 49.9927 47.1098 49.646C46.6244 49.022 46.3644 47.9907 46.3298 46.552C46.2778 45.1133 46.5031 43.4147 47.0058 41.456C47.4911 39.4973 48.2018 37.608 49.1378 35.788C50.7844 32.6507 52.7951 29.86 55.1698 27.416C55.4298 25.7867 55.6898 24.0793 55.9498 22.294C55.4124 23.1087 54.9098 23.7933 54.4418 24.348C53.6791 25.284 52.9511 25.544 52.2578 25.128C51.6858 24.7813 51.3824 24.062 51.3478 22.97C51.3131 21.8607 51.5644 20.656 52.1018 19.356C52.1538 19.2347 52.2404 19.148 52.3618 19.096C52.5004 19.044 52.6304 19.044 52.7518 19.096C52.8731 19.148 52.9598 19.2347 53.0118 19.356C53.0811 19.4773 53.0898 19.6073 53.0378 19.746C52.5698 21.0113 52.3358 22.0427 52.3358 22.84C52.3531 23.6373 52.5004 24.114 52.7778 24.27C52.9684 24.3913 53.2631 24.2093 53.6618 23.724C54.5284 22.684 55.4211 21.3667 56.3398 19.772C56.4784 19.5293 56.6778 19.46 56.9378 19.564C57.1978 19.6507 57.3104 19.824 57.2758 20.084C56.9811 22.2507 56.6778 24.3047 56.3658 26.246C58.1511 24.582 60.3871 22.8747 63.0738 21.124C63.1778 21.0547 63.2991 21.0373 63.4378 21.072ZM51.7638 42.522C52.8731 39.0553 53.9044 34.6267 54.8578 29.236C52.9858 31.316 51.3738 33.656 50.0218 36.256C49.2764 37.6773 48.6871 39.1247 48.2538 40.598C47.8031 42.0887 47.5258 43.3887 47.4218 44.498C47.3178 45.6073 47.3091 46.5607 47.3958 47.358C47.4824 48.1553 47.6471 48.7013 47.8898 48.996C48.0111 49.1347 48.1324 49.1867 48.2538 49.152C48.3404 49.1347 48.4358 49.0913 48.5398 49.022C48.6438 48.9527 48.8171 48.7707 49.0598 48.476C49.3024 48.1987 49.5451 47.8347 49.7878 47.384C50.0304 46.9507 50.3338 46.3093 50.6978 45.46C51.0618 44.6107 51.4171 43.6313 51.7638 42.522ZM75.2511 21.228C75.3898 21.2107 75.5111 21.2453 75.6151 21.332C75.7364 21.4187 75.7971 21.5313 75.7971 21.67C75.8144 21.8087 75.7798 21.93 75.6931 22.034C75.0344 22.7967 74.2804 23.3513 73.4311 23.698C72.5818 24.0273 71.7758 24.088 71.0131 23.88C70.1291 23.6547 69.4444 23.1087 68.9591 22.242C68.5258 23.75 67.8671 25.232 66.9831 26.688C66.3938 27.676 65.7958 28.4907 65.1891 29.132C64.5824 29.7907 64.0364 30.198 63.5511 30.354C63.3778 30.406 63.2131 30.432 63.0571 30.432C62.7451 30.432 62.4851 30.328 62.2771 30.12C61.2718 29.0973 61.7744 25.5787 63.7851 19.564C63.8198 19.4427 63.8978 19.356 64.0191 19.304C64.1578 19.2347 64.2878 19.226 64.4091 19.278C64.5478 19.3127 64.6431 19.3907 64.6951 19.512C64.7644 19.6333 64.7731 19.7633 64.7211 19.902C64.2184 21.4273 63.8111 22.7967 63.4991 24.01C63.1871 25.206 62.9791 26.1247 62.8751 26.766C62.7884 27.39 62.7538 27.9187 62.7711 28.352C62.7884 28.7853 62.8144 29.054 62.8491 29.158C62.8838 29.2793 62.9271 29.3573 62.9791 29.392C63.0311 29.444 63.1178 29.444 63.2391 29.392C63.7244 29.236 64.3311 28.69 65.0591 27.754C65.7871 26.818 66.4718 25.6653 67.1131 24.296C67.7544 22.9093 68.1618 21.6007 68.3351 20.37C68.3524 20.2487 68.4044 20.1533 68.4911 20.084C68.5951 19.9973 68.7078 19.9453 68.8291 19.928C69.1064 19.928 69.2711 20.0667 69.3231 20.344C69.6004 21.8 70.2504 22.658 71.2731 22.918C71.8451 23.074 72.4604 23.0133 73.1191 22.736C73.7951 22.4587 74.3931 22.008 74.9131 21.384C75.0171 21.28 75.1298 21.228 75.2511 21.228ZM85.1784 21.202C85.3171 21.15 85.4471 21.1587 85.5684 21.228C85.6898 21.28 85.7678 21.3753 85.8024 21.514C85.8544 21.6353 85.8544 21.7567 85.8024 21.878C83.9478 25.7087 82.2924 27.624 80.8364 27.624C80.7498 27.624 80.6544 27.6153 80.5504 27.598C79.3891 27.3727 78.6698 25.8127 78.3924 22.918C77.5431 24.062 76.7891 24.998 76.1304 25.726C75.5411 26.35 75.0384 26.5667 74.6224 26.376C74.2064 26.22 74.0071 25.7693 74.0244 25.024C74.0244 24.4 74.1631 23.6547 74.4404 22.788C74.7178 21.9213 75.1251 21.0807 75.6624 20.266C76.1998 19.4513 76.7804 18.94 77.4044 18.732C78.3231 18.4027 79.1724 18.706 79.9524 19.642C80.0391 19.746 80.0738 19.8673 80.0564 20.006C80.0564 20.1447 80.0044 20.2573 79.9004 20.344C79.7964 20.4307 79.6751 20.474 79.5364 20.474C79.3978 20.4567 79.2851 20.396 79.1984 20.292C78.5918 19.564 77.9764 19.4253 77.3524 19.876C76.6418 20.3787 76.0438 21.2887 75.5584 22.606C75.0904 23.906 74.9084 24.8333 75.0124 25.388C75.1164 25.3013 75.2378 25.1887 75.3764 25.05C76.0698 24.3047 76.9191 23.2387 77.9244 21.852C78.1498 21.54 78.3058 21.3233 78.3924 21.202C78.5311 21.0287 78.7131 20.9767 78.9384 21.046C79.1638 21.098 79.2851 21.2453 79.3024 21.488C79.3371 22.3373 79.4064 23.0913 79.5104 23.75C79.6144 24.4087 79.7184 24.9113 79.8224 25.258C79.9264 25.5873 80.0478 25.8647 80.1864 26.09C80.3251 26.3153 80.4291 26.4627 80.4984 26.532C80.5851 26.584 80.6718 26.61 80.7584 26.61C81.0011 26.662 81.3044 26.5493 81.6684 26.272C82.0498 25.9773 82.5264 25.4227 83.0984 24.608C83.6878 23.776 84.2858 22.7273 84.8924 21.462C84.9618 21.3233 85.0571 21.2367 85.1784 21.202ZM94.741 21.15C94.8796 21.1153 95.0096 21.1327 95.131 21.202C95.2523 21.2713 95.3303 21.3753 95.365 21.514C95.3996 21.6353 95.3823 21.7567 95.313 21.878C94.7236 22.918 94.2123 23.7413 93.779 24.348C93.3456 24.9547 92.9036 25.4313 92.453 25.778C92.0023 26.1247 91.5603 26.272 91.127 26.22C90.2603 26.116 89.5756 25.18 89.073 23.412C88.709 22.216 88.397 21.618 88.137 21.618C88.085 21.6007 88.007 21.6267 87.903 21.696C87.8163 21.748 87.669 21.904 87.461 22.164C87.253 22.4067 87.019 22.7447 86.759 23.178C86.5163 23.6113 86.187 24.2527 85.771 25.102C85.3723 25.9513 84.939 26.9567 84.471 28.118C84.3843 28.326 84.2283 28.43 84.003 28.43C83.9683 28.43 83.9336 28.4213 83.899 28.404C83.6043 28.3347 83.4743 28.1527 83.509 27.858C83.6823 26.4367 84.3323 23.7933 85.459 19.928C85.5803 19.5293 85.667 19.226 85.719 19.018C85.771 18.8793 85.8576 18.784 85.979 18.732C86.1003 18.6627 86.2216 18.6453 86.343 18.68C86.4816 18.7147 86.5856 18.7927 86.655 18.914C86.7243 19.0353 86.733 19.1653 86.681 19.304C86.6463 19.4253 86.5596 19.7287 86.421 20.214C86.0396 21.5487 85.745 22.5887 85.537 23.334C86.0916 22.294 86.577 21.5747 86.993 21.176C87.409 20.7773 87.8076 20.5867 88.189 20.604C88.6396 20.6213 88.995 20.8553 89.255 21.306C89.5323 21.7567 89.7923 22.372 90.035 23.152C90.4163 24.4867 90.8236 25.18 91.257 25.232C91.465 25.2667 91.7163 25.154 92.011 24.894C92.323 24.6167 92.6523 24.2267 92.999 23.724C93.3456 23.204 93.6056 22.7967 93.779 22.502C93.9696 22.2073 94.1863 21.8347 94.429 21.384C94.4983 21.2627 94.6023 21.1847 94.741 21.15ZM128.881 1.598C129.019 1.546 129.149 1.55467 129.271 1.624C129.392 1.676 129.47 1.77133 129.505 1.91C129.557 2.03133 129.557 2.15267 129.505 2.274C129.314 2.638 128.95 3.34867 128.413 4.406C124.097 12.934 120.561 19.5813 117.805 24.348C116.297 26.948 114.945 29.1407 113.749 30.926C112.553 32.7113 111.556 34.0287 110.759 34.878C109.979 35.7447 109.337 36.3427 108.835 36.672C108.349 37.0013 107.916 37.166 107.535 37.166C107.413 37.166 107.292 37.1487 107.171 37.114C106.131 36.8713 105.628 35.4587 105.663 32.876C105.715 29.4267 107.396 21.0027 110.707 7.604C110.984 6.49467 111.166 5.74933 111.253 5.368C111.391 4.81333 111.487 4.31933 111.539 3.886C111.591 3.43533 111.608 3.09733 111.591 2.872C111.591 2.62933 111.565 2.43 111.513 2.274C111.478 2.10067 111.443 1.99667 111.409 1.962C111.374 1.91 111.339 1.87533 111.305 1.858C111.01 1.66733 110.447 1.90133 109.615 2.56C108.921 3.09733 108.211 3.82533 107.483 4.744C106.772 5.64533 106.139 6.59 105.585 7.578C105.047 8.566 104.649 9.57133 104.389 10.594C104.146 11.6167 104.137 12.466 104.363 13.142C104.744 14.3033 105.879 14.9013 107.769 14.936C107.907 14.936 108.02 14.988 108.107 15.092C108.211 15.196 108.263 15.3173 108.263 15.456C108.263 15.5947 108.211 15.716 108.107 15.82C108.02 15.9067 107.907 15.9413 107.769 15.924C106.451 15.9067 105.455 15.664 104.779 15.196C104.103 14.728 103.643 14.1473 103.401 13.454C103.123 12.5353 103.123 11.5213 103.401 10.412C103.678 9.28533 104.129 8.15867 104.753 7.032C105.394 5.90533 106.087 4.88267 106.833 3.964C107.595 3.028 108.323 2.29133 109.017 1.754C110.213 0.817998 111.157 0.575331 111.851 1.026C112.7 1.58066 112.83 3.106 112.241 5.602C112.154 5.98333 111.972 6.72867 111.695 7.838C108.384 21.1673 106.703 29.522 106.651 32.902C106.651 33.4393 106.668 33.9073 106.703 34.306C106.737 34.722 106.781 35.034 106.833 35.242C106.902 35.4673 106.971 35.6493 107.041 35.788C107.127 35.944 107.197 36.0393 107.249 36.074C107.301 36.1087 107.353 36.1347 107.405 36.152C107.457 36.152 107.509 36.152 107.561 36.152C107.613 36.1693 107.691 36.152 107.795 36.1C107.916 36.048 108.037 35.9873 108.159 35.918C108.297 35.8487 108.471 35.7273 108.679 35.554C108.887 35.398 109.103 35.2073 109.329 34.982C109.554 34.7567 109.814 34.462 110.109 34.098C110.421 33.7513 110.75 33.3527 111.097 32.902C112.691 30.822 114.641 27.7973 116.947 23.828C119.703 19.096 123.23 12.4747 127.529 3.964C128.083 2.872 128.439 2.16133 128.595 1.832C128.664 1.71067 128.759 1.63267 128.881 1.598ZM131.211 21.02C131.35 20.9853 131.48 21.0027 131.601 21.072C131.722 21.1413 131.792 21.2453 131.809 21.384C131.844 21.5227 131.826 21.6527 131.757 21.774C131.272 22.5367 130.682 23.334 129.989 24.166C129.313 24.9807 128.542 25.7173 127.675 26.376C126.826 27.0347 126.106 27.364 125.517 27.364C125.309 27.364 125.127 27.3293 124.971 27.26C123.81 26.7573 123.688 24.7207 124.607 21.15C124.642 21.0113 124.72 20.9073 124.841 20.838C124.962 20.7687 125.084 20.7513 125.205 20.786C125.344 20.8207 125.448 20.8987 125.517 21.02C125.586 21.1413 125.604 21.2627 125.569 21.384C125.361 22.216 125.205 22.9527 125.101 23.594C125.014 24.218 124.971 24.6947 124.971 25.024C124.988 25.3533 125.023 25.6307 125.075 25.856C125.144 26.064 125.196 26.194 125.231 26.246C125.283 26.2807 125.326 26.3067 125.361 26.324C125.812 26.5147 126.626 26.064 127.805 24.972C129.001 23.88 130.032 22.632 130.899 21.228C130.986 21.124 131.09 21.0547 131.211 21.02ZM125.465 18.992C124.962 18.9573 124.806 18.7493 124.997 18.368C125.17 18.056 125.396 17.848 125.673 17.744C126.106 17.6053 126.366 17.718 126.453 18.082C126.54 18.4287 126.41 18.6887 126.063 18.862C125.89 18.9487 125.69 18.992 125.465 18.992ZM140.647 21.15C140.786 21.1153 140.916 21.1327 141.037 21.202C141.159 21.2713 141.237 21.3753 141.271 21.514C141.306 21.6353 141.289 21.7567 141.219 21.878C140.63 22.918 140.119 23.7413 139.685 24.348C139.252 24.9547 138.81 25.4313 138.359 25.778C137.909 26.1247 137.467 26.272 137.033 26.22C136.167 26.116 135.482 25.18 134.979 23.412C134.615 22.216 134.303 21.618 134.043 21.618C133.991 21.6007 133.913 21.6267 133.809 21.696C133.723 21.748 133.575 21.904 133.367 22.164C133.159 22.4067 132.925 22.7447 132.665 23.178C132.423 23.6113 132.093 24.2527 131.677 25.102C131.279 25.9513 130.845 26.9567 130.377 28.118C130.291 28.326 130.135 28.43 129.909 28.43C129.875 28.43 129.84 28.4213 129.805 28.404C129.511 28.3347 129.381 28.1527 129.415 27.858C129.589 26.4367 130.239 23.7933 131.365 19.928C131.487 19.5293 131.573 19.226 131.625 19.018C131.677 18.8793 131.764 18.784 131.885 18.732C132.007 18.6627 132.128 18.6453 132.249 18.68C132.388 18.7147 132.492 18.7927 132.561 18.914C132.631 19.0353 132.639 19.1653 132.587 19.304C132.553 19.4253 132.466 19.7287 132.327 20.214C131.946 21.5487 131.651 22.5887 131.443 23.334C131.998 22.294 132.483 21.5747 132.899 21.176C133.315 20.7773 133.714 20.5867 134.095 20.604C134.546 20.6213 134.901 20.8553 135.161 21.306C135.439 21.7567 135.699 22.372 135.941 23.152C136.323 24.4867 136.73 25.18 137.163 25.232C137.371 25.2667 137.623 25.154 137.917 24.894C138.229 24.6167 138.559 24.2267 138.905 23.724C139.252 23.204 139.512 22.7967 139.685 22.502C139.876 22.2073 140.093 21.8347 140.335 21.384C140.405 21.2627 140.509 21.1847 140.647 21.15ZM147.08 21.02C147.219 20.9853 147.349 21.0027 147.47 21.072C147.592 21.1413 147.661 21.2453 147.678 21.384C147.713 21.5227 147.696 21.6527 147.626 21.774C147.141 22.5367 146.552 23.334 145.858 24.166C145.182 24.9807 144.411 25.7173 143.544 26.376C142.695 27.0347 141.976 27.364 141.386 27.364C141.178 27.364 140.996 27.3293 140.84 27.26C139.679 26.7573 139.558 24.7207 140.476 21.15C140.511 21.0113 140.589 20.9073 140.71 20.838C140.832 20.7687 140.953 20.7513 141.074 20.786C141.213 20.8207 141.317 20.8987 141.386 21.02C141.456 21.1413 141.473 21.2627 141.438 21.384C141.23 22.216 141.074 22.9527 140.97 23.594C140.884 24.218 140.84 24.6947 140.84 25.024C140.858 25.3533 140.892 25.6307 140.944 25.856C141.014 26.064 141.066 26.194 141.1 26.246C141.152 26.2807 141.196 26.3067 141.23 26.324C141.681 26.5147 142.496 26.064 143.674 24.972C144.87 23.88 145.902 22.632 146.768 21.228C146.855 21.124 146.959 21.0547 147.08 21.02ZM141.334 18.992C140.832 18.9573 140.676 18.7493 140.866 18.368C141.04 18.056 141.265 17.848 141.542 17.744C141.976 17.6053 142.236 17.718 142.322 18.082C142.409 18.4287 142.279 18.6887 141.932 18.862C141.759 18.9487 141.56 18.992 141.334 18.992ZM154.644 21.02C154.783 20.9853 154.904 21.0113 155.008 21.098C155.13 21.1673 155.208 21.2713 155.242 21.41C155.277 21.5487 155.251 21.67 155.164 21.774C154.592 22.658 154.09 23.4033 153.656 24.01C153.24 24.6167 152.764 25.2667 152.226 25.96C151.689 26.636 151.195 27.1733 150.744 27.572C150.311 27.988 149.852 28.326 149.366 28.586C148.881 28.8633 148.422 29.002 147.988 29.002C147.832 29.002 147.676 28.9847 147.52 28.95C146.896 28.8113 146.42 28.4473 146.09 27.858C145.744 27.078 145.596 26.2287 145.648 25.31C145.683 24.374 145.865 23.4553 146.194 22.554C146.541 21.6007 146.974 20.864 147.494 20.344C148.032 19.824 148.534 19.642 149.002 19.798C149.106 19.8327 149.202 19.8847 149.288 19.954C149.375 20.006 149.479 20.1273 149.6 20.318C149.722 20.4913 149.782 20.7253 149.782 21.02C149.782 21.3147 149.73 21.696 149.626 22.164C149.592 22.3027 149.514 22.4067 149.392 22.476C149.288 22.5453 149.167 22.5627 149.028 22.528C148.89 22.4933 148.786 22.4153 148.716 22.294C148.647 22.1727 148.63 22.0513 148.664 21.93C148.838 21.2713 148.846 20.8727 148.69 20.734C148.621 20.734 148.508 20.786 148.352 20.89C148.214 20.994 148.023 21.228 147.78 21.592C147.538 21.9387 147.321 22.3807 147.13 22.918C146.818 23.7327 146.645 24.5647 146.61 25.414C146.593 26.246 146.714 26.896 146.974 27.364C147.148 27.6933 147.399 27.8927 147.728 27.962C148.023 28.0313 148.352 27.988 148.716 27.832C149.098 27.676 149.496 27.3987 149.912 27C150.346 26.584 150.736 26.1853 151.082 25.804C151.429 25.4053 151.828 24.8853 152.278 24.244C152.746 23.5853 153.102 23.0827 153.344 22.736C153.587 22.372 153.916 21.8693 154.332 21.228C154.402 21.124 154.506 21.0547 154.644 21.02ZM161.045 21.02C161.184 20.9853 161.314 21.0027 161.435 21.072C161.556 21.1413 161.626 21.2453 161.643 21.384C161.678 21.5227 161.66 21.6527 161.591 21.774C161.106 22.5367 160.516 23.334 159.823 24.166C159.147 24.9807 158.376 25.7173 157.509 26.376C156.66 27.0347 155.94 27.364 155.351 27.364C155.143 27.364 154.961 27.3293 154.805 27.26C153.644 26.7573 153.522 24.7207 154.441 21.15C154.476 21.0113 154.554 20.9073 154.675 20.838C154.796 20.7687 154.918 20.7513 155.039 20.786C155.178 20.8207 155.282 20.8987 155.351 21.02C155.42 21.1413 155.438 21.2627 155.403 21.384C155.195 22.216 155.039 22.9527 154.935 23.594C154.848 24.218 154.805 24.6947 154.805 25.024C154.822 25.3533 154.857 25.6307 154.909 25.856C154.978 26.064 155.03 26.194 155.065 26.246C155.117 26.2807 155.16 26.3067 155.195 26.324C155.646 26.5147 156.46 26.064 157.639 24.972C158.835 23.88 159.866 22.632 160.733 21.228C160.82 21.124 160.924 21.0547 161.045 21.02ZM155.299 18.992C154.796 18.9573 154.64 18.7493 154.831 18.368C155.004 18.056 155.23 17.848 155.507 17.744C155.94 17.6053 156.2 17.718 156.287 18.082C156.374 18.4287 156.244 18.6887 155.897 18.862C155.724 18.9487 155.524 18.992 155.299 18.992ZM170.377 21.332C170.516 21.2973 170.637 21.3147 170.741 21.384C170.863 21.4533 170.941 21.5573 170.975 21.696C171.01 21.8347 170.993 21.956 170.923 22.06C170.715 22.3893 170.49 22.7447 170.247 23.126C170.005 23.49 169.641 23.9927 169.155 24.634C168.687 25.2753 168.237 25.8387 167.803 26.324C167.37 26.792 166.902 27.208 166.399 27.572C165.897 27.936 165.463 28.118 165.099 28.118C164.961 28.118 164.839 28.092 164.735 28.04C163.903 27.728 163.669 26.402 164.033 24.062C163.461 24.842 162.941 25.4313 162.473 25.83C161.797 26.402 161.208 26.4713 160.705 26.038C160.237 25.6567 160.029 24.9807 160.081 24.01C160.116 23.0393 160.393 22.1033 160.913 21.202C160.983 21.0807 161.087 21.0027 161.225 20.968C161.364 20.9333 161.494 20.9507 161.615 21.02C161.737 21.0893 161.815 21.1933 161.849 21.332C161.884 21.4533 161.867 21.5747 161.797 21.696C161.503 22.1813 161.295 22.6927 161.173 23.23C161.069 23.7673 161.035 24.218 161.069 24.582C161.121 24.9287 161.208 25.154 161.329 25.258C161.416 25.3447 161.581 25.284 161.823 25.076C162.274 24.6947 162.837 24.01 163.513 23.022C163.635 22.866 163.721 22.7533 163.773 22.684C163.843 22.5973 163.921 22.502 164.007 22.398C164.094 22.2767 164.163 22.1987 164.215 22.164C164.267 22.1293 164.328 22.0947 164.397 22.06C164.467 22.008 164.536 21.9907 164.605 22.008C164.675 22.008 164.753 22.0253 164.839 22.06C165.065 22.1467 165.186 22.346 165.203 22.658C165.221 22.9527 165.177 23.3427 165.073 23.828C164.883 24.7813 164.805 25.5093 164.839 26.012C164.891 26.5147 164.935 26.8267 164.969 26.948C165.004 27.052 165.047 27.104 165.099 27.104C165.151 27.1387 165.238 27.1213 165.359 27.052C165.498 27 165.654 26.9047 165.827 26.766C166.018 26.6273 166.226 26.454 166.451 26.246C166.677 26.0207 166.928 25.752 167.205 25.44C167.5 25.128 167.795 24.79 168.089 24.426C168.384 24.0447 168.705 23.6113 169.051 23.126C169.398 22.6233 169.736 22.0947 170.065 21.54C170.135 21.4187 170.239 21.3493 170.377 21.332ZM180.918 20.916C181.056 20.8987 181.178 20.942 181.282 21.046C181.386 21.1327 181.446 21.2453 181.464 21.384C181.481 21.5227 181.438 21.644 181.334 21.748C177.971 25.6653 176.047 27.9273 175.562 28.534C175.267 28.9153 174.981 29.288 174.704 29.652C174.946 30.64 174.964 31.5933 174.756 32.512C174.548 33.4307 174.253 34.2193 173.872 34.878C173.49 35.5367 173.04 36.074 172.52 36.49C172.034 36.906 171.584 37.114 171.168 37.114C170.908 37.114 170.691 37.0273 170.518 36.854C169.599 35.97 170.63 33.5 173.612 29.444C173.421 28.7853 173.118 28.144 172.702 27.52C171.835 26.22 171.194 25.1367 170.778 24.27C170.362 23.4033 170.171 22.6147 170.206 21.904C170.24 21.2107 170.422 20.5867 170.752 20.032C171.098 19.4773 171.558 19.0267 172.13 18.68C172.615 18.3853 173.126 18.212 173.664 18.16C174.201 18.108 174.695 18.186 175.146 18.394C175.267 18.4633 175.345 18.5673 175.38 18.706C175.432 18.8273 175.423 18.9487 175.354 19.07C175.302 19.1913 175.206 19.278 175.068 19.33C174.946 19.3647 174.825 19.356 174.704 19.304C174.08 19.0093 173.395 19.0873 172.65 19.538C171.748 20.0753 171.272 20.8813 171.22 21.956C171.185 22.528 171.367 23.2127 171.766 24.01C172.164 24.79 172.754 25.7693 173.534 26.948C173.863 27.4507 174.132 27.962 174.34 28.482C174.478 28.3087 174.626 28.118 174.782 27.91C175.267 27.3033 177.2 25.0327 180.58 21.098C180.666 20.994 180.779 20.9333 180.918 20.916ZM172.832 34.644C173.594 33.4827 173.932 32.2087 173.846 30.822C173.118 31.862 172.528 32.7893 172.078 33.604C171.644 34.4187 171.376 34.9993 171.272 35.346C171.185 35.71 171.159 35.9613 171.194 36.1C171.35 36.0827 171.584 35.944 171.896 35.684C172.208 35.4413 172.52 35.0947 172.832 34.644Z"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}