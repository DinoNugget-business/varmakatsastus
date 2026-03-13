import Image from "next/image";
import { useTranslations } from "next-intl";
import { NEWS_ARTICLES } from "@/lib/news-data";

export default function NewsPage() {
  const t = useTranslations();

  return (
    <>
      <section className="bg-brand-dark py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-text-light mb-3">
            {t("news.title")}
          </h1>
          <p className="text-text-muted-dark max-w-2xl mx-auto">{t("news.subtitle")}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {NEWS_ARTICLES.map((article) => {
              const date = new Date(article.date);
              const formatted = date.toLocaleDateString("fi-FI", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              });

              return (
                <article
                  key={article.id}
                  className="light-card rounded-xl overflow-hidden"
                >
                  {article.image && (
                    <div className="relative h-48">
                      <Image
                        src={article.image}
                        alt={t(`news.articles.${article.id}.title`)}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  )}
                  <div className="p-5">
                    <time className="text-xs text-text-dim font-medium">{formatted}</time>
                    <h2 className="font-display font-semibold text-lg mt-1 mb-2 text-text-primary">
                      {t(`news.articles.${article.id}.title`)}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {t(`news.articles.${article.id}.excerpt`)}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
