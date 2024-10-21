"use client";

import React, { ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import initTranslations from "@/lib/initTranslations";
import { createInstance, i18n as I18nInstance } from "i18next";

interface TranslationsProviderProps {
	children: ReactNode;
	locale: string;
	namespaces: string[];
	resources?: Record<string, any>;
}

export default function TranslationsProvider({
	children,
	locale,
	namespaces,
	resources,
}: TranslationsProviderProps) {
	const i18n: I18nInstance = createInstance();

	useEffect(() => {
		initTranslations(locale, namespaces, i18n, resources);
	}, [locale, namespaces, resources]);

	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
