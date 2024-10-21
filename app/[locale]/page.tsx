import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationProvider";

const i18nNamespaces = ["Home"];

async function Home({ params: { locale } }: { params: { locale: string } }) {
	const { t, resources } = await initTranslations(locale, i18nNamespaces);

	return (
		<TranslationsProvider
			namespaces={i18nNamespaces}
			locale={locale}
			resources={resources}
		>
			<main className="flex flex-col justify-center items-center font-bold gap-3">
				<h1 className="text-5xl mt-12">{t("header")}</h1>
				<ExampleClientComponent />
				<LanguageChanger />
			</main>
		</TranslationsProvider>
	);
}

export default Home;
