import ExampleClientComponent from "@/components/ExampleClientComponent";
import TranslationProvider from "@/components/TranslationProvider";
import initTranslations from "@/lib/initTranslations";
import { GetStaticProps } from "next";

interface HomeProps {
	params: {
		locale: string;
	};
}

const i18nNamespaces = ["Home"];

export default async function Home({ params: { locale } }: HomeProps) {
	try {
		const { t, resources } = await initTranslations(locale, i18nNamespaces);
		return (
			<TranslationProvider
				namespaces={i18nNamespaces}
				locale={locale}
				resources={resources}
			>
				<main className="flex flex-col justify-center items-center font-bold h-screen">
					<h1 className="text-5xl">{t("header")}</h1>
					<ExampleClientComponent />
				</main>
			</TranslationProvider>
		);
	} catch (error) {
		console.error("Error initializing translations:", error);
		return <div>Error loading translations</div>;
	}
}
