'use client'

import { createContext } from "react";
import { PointsTemplates, TemplateType } from "./pointsTemplates";

interface TemplatesContextProps {
    templates: {
        points: TemplateType[]
        strategy: TemplateType[]
    }
}

export const TemplatesContext = createContext<TemplatesContextProps>({
    templates: {
        points: [],
        strategy: []
    }
});

export default function TemplatesProvider({ children }: any) {
    return <TemplatesContext.Provider
        value={{
            templates: {
                points: PointsTemplates,
                strategy: []
            }
        }}
    >
        {children}
    </TemplatesContext.Provider>
}