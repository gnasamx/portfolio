import Link from "next/link";

export default function Home() {
  return (
    <article className="max-w-xl">
      <p>Hi, I&apos;m Ganesh. I live in Mumbai, India.</p>
      <p>
        I create user interfaces for sites and apps. I’m currently working at{" "}
        <Link href="https://www.stewart.com/en.html">Stewart</Link>. Previously
        I was creating and directing corporate and new business marketing sites,
        and apps at{" "}
        <Link href="https://www.acceleratebs.com">AccelerateBSi</Link>.
      </p>
      <p>
        Feel free to say{" "}
        <Link href="mailto:gnasamx@gmail.com?Subject=Hello">hello</Link>, review
        my <a href="https://github.com/gnasamx">code</a>, or{" "}
        <a href="https://twitter.com/gnasamx">twitter</a>.
      </p>
    </article>
  );
}
