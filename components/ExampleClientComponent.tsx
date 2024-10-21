"use client";

import { useTranslation } from "react-i18next";

export default function ExampleClientComponent() {
	const { t } = useTranslation();
	const userName = "Keith";

	return <h3 className="mt-6">{t("subheader", { userName })}</h3>;
}
