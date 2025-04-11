"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { seoConfig } from "@/app/seo-config"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  section?: "home" | "doctors" | "services" | "contact"
}

export default function SEO({
  title,
  description,
  keywords,
  ogImage = seoConfig.socialMedia.image,
  ogType = "website",
  twitterCard = "summary_large_image",
  section = "home",
}: SEOProps) {
  const pathname = usePathname()
  const url = `${seoConfig.siteUrl}${pathname}`

  // Use section-specific SEO if no custom values provided
  const sectionConfig = seoConfig[section]
  const finalTitle = title || sectionConfig.title
  const finalDescription = description || sectionConfig.description
  const finalKeywords = keywords || sectionConfig.keywords

  useEffect(() => {
    // Update meta tags on the client side
    document.title = finalTitle

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", finalDescription)
    } else {
      const meta = document.createElement("meta")
      meta.name = "description"
      meta.content = finalDescription
      document.head.appendChild(meta)
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", finalKeywords)
    } else {
      const meta = document.createElement("meta")
      meta.name = "keywords"
      meta.content = finalKeywords
      document.head.appendChild(meta)
    }

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute("href", url)
    } else {
      canonicalLink = document.createElement("link")
      canonicalLink.rel = "canonical"
      canonicalLink.href = url
      document.head.appendChild(canonicalLink)
    }

    // Update Open Graph tags
    updateMetaTag("og:title", finalTitle)
    updateMetaTag("og:description", finalDescription)
    updateMetaTag("og:url", url)
    updateMetaTag("og:type", ogType)
    updateMetaTag("og:image", ogImage)

    // Update Twitter Card tags
    updateMetaTag("twitter:card", twitterCard)
    updateMetaTag("twitter:title", finalTitle)
    updateMetaTag("twitter:description", finalDescription)
    updateMetaTag("twitter:image", ogImage)
  }, [finalTitle, finalDescription, finalKeywords, url, ogType, ogImage, twitterCard])

  // Helper function to update meta tags
  function updateMetaTag(property: string, content: string) {
    const selector = property.startsWith("og:") ? `meta[property="${property}"]` : `meta[name="${property}"]`

    const tag = document.querySelector(selector)
    if (tag) {
      if (property.startsWith("og:")) {
        tag.setAttribute("property", property)
      } else {
        tag.setAttribute("name", property)
      }
      tag.setAttribute("content", content)
    } else {
      const meta = document.createElement("meta")
      if (property.startsWith("og:")) {
        meta.setAttribute("property", property)
      } else {
        meta.setAttribute("name", property)
      }
      meta.content = content
      document.head.appendChild(meta)
    }
  }

  // This component doesn't render anything visible
  return null
}
