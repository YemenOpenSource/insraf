"use client";
import Button from "./Button";
import Container from "./ContainerLoading";

export default function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-700 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-bolder tracking-tight text-white sm:text-4xl">
            هيا بنا لتجربة 👌🎯
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white font-regular">
            قم بتجربة إنصلاف - برنامج الاسهل لإدارة الطالب
          </p>
          <Button href="/admin" className="mt-10">
            تجربة
          </Button>
        </div>
      </Container>
    </section>
  );
}
