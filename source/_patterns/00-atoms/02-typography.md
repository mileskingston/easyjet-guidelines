### Headings

These exist at 6 levels, although the first 4 levels are the most used.

1. Page heading
1. Region heading
1. Section heading
1. Section Sub-heading
1. *Sub-section heading*
1. *Sub-section Sub-heading*

#### Important

Headings are important for several reasons:
1. They help people scan the page
    - Those who can see will concentrate attention on bigger, bolder things
    - Those who use screen readers can navigate headings in a list or jump through them
1. They help search engines tell what your pages are about and what information is the most important 
1. You will need headings if you want to achieve W3C WCAG 2.0 compliance

Headings are so important that W3C WCAG 2.0 dedicated not one but three success criteria to it:

 - 1.3.1 Info and relationships (A)
 - 2.4.6 Headings and labels (AA)
 - 2.4.10 Section headings (AAA)

#### Rules

1. Everything that looks like a heading must be coded as a heading (1.3.1 A)
1. Ensure that all important page regions and sections are denoted using headings. A good test is to imagine that you are giving an overview of the page to someone who isn’t looking at the screen (2.4.10 A)
1. Ensure that each heading accurately describes the section it is preceding (2.4.6 AA)
1. ?TODO Something about headings must head-up content ?
1. ?TODO Something about no headings before the `<h1>`?

**Warning: Empty headings cause issues for some users**

#### Heading hierarchy

Each page must have one main unique heading that is coded using `<h1>`.

The `c-page-heading` atom will accomplish this by default on content pages.

For the booking funnel pages ... TODO

The page's regions are then coded using `<h2>`s.

These are supplied by the `c-region-heading` atom to describe page regions (Basket, Footer, Drawer) and the principal blocks of main content (Shelf titles... TODO)

Within each page region, the region's sections are coded using `<h3>`s, courtesy of the `c-section-heading` atom.

> **Note**:
  page, region and section heading atoms are also available in `--hidden` variants
  which are used to inform screenreader users of important elements like the booking form

After this, use headings sparingly according to the sections' and sub-sections' hierarchical structure.

The atoms to use are:
 - `c-section-sub-heading`
 - `c-sub-section-heading`
 - `c-sub-section-sub-heading` 
