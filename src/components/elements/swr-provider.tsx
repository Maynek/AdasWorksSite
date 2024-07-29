//--------------------------------
// © Ada Maynek 2024
// This software is released under the MIT License.
//--------------------------------
'use client'
import type { ReactNode } from 'react';
import { SWRConfig } from "swr"

export const SWRProvider = ({ children }:{children : ReactNode}) => {
  return <SWRConfig>{children}</SWRConfig>
}