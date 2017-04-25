# EJD Patternlab (Using Pattern Lab Node + Gulp Edition v1.3.4)

## Installation

    $ npm install

## Source files

### Patterns

Atomic Design (AD) patterns live under `source/patterns` then under their AD designation:

* `00-atoms`: The smallest instances of patterns. Often single elements
* `01-molecules`: Combinations of elements that form a 'snippet' of UI
* `02-organisms`: Combinations of molecules and atoms that make a 'block' of UI
* `03-templates`: Templated pages with boilerpate content
* `04-pages`: Full pages with real content

Utility elements exist outside of Atomic Design as they don't create UI:

* `99-utils`: For utility templates

#### Variations

Pattern variations are named `[pattern]~[variation].hbs`

#### Hidden patterns

Prefix the pattern filename with `_` to hide it from Pattern Lab navigation.

Prefix a folder with `_` to hide all contained patterns.

#### Content

Pattern-specific content is found in `[pattern].json`.

Variation-specific content extends this with `[pattern]~[variation].json`

### Generic Content (lorem ipsum)

Generic content items are found within the `_data` folder:

* `data.json`: generic lorem ipsum content filler
* `listitems.json`: generic content filler keyed `1`..`12` to use in lists

### Templating

The templates are created in [handlebars](http://handlebarsjs.com/) (.hbs), which is a newer fork of mustache.
Original .mustache templates could also be used, and a few other pattern engines. Just search for `pattern lab patternengine` to find them.

### Styles
Following the standard structure:

    [pattern-type]/[pattern-subtype]/[pattern-name]

    e.g.
    molecules/text/c-page-heading

Individual pattern styles should be written in SCSS and saved alongside the pattern as `[pattern-name].scss`.

These `@import` rules are added to `_[pattern-subtype].scss` which are then agregated in `_[pattern-type].scss`.

## Commands

These are some helpful commands you can use on the command line for working with Pattern Lab.

> Reminder: These commands assume a global installation of gulp 4.X, instead of a local installation. Depending on your preference, you may need to [upgrade your global version of gulp](https://github.com/pattern-lab/edition-node-gulp/wiki/Updating-to-Gulp-4) or [run with local gulp](https://github.com/pattern-lab/patternlab-node/wiki/Running-with-Local-Gulp-Instead-of-Global-Gulp).

### List all of the available commands

    gulp patternlab:help

### Build Pattern Lab

    gulp patternlab:build

### Watch Pattern Lab

    gulp patternlab:serve

BrowserSync should open [http://localhost:3000](http://localhost:3000) in your browser.

### .md formats

#### Headings
# Level 1 Heading
## Level 2 Heading
    # Level 1 Heading
    ## Level 2 Heading

#### Links
[Click here](http://www.google.co.uk) for more information.
    
    [Click here](http://www.google.co.uk) for more information. 

#### Quotes
> This is a quotation

    > This is a quotation

#### Character styles
*Italic characters* 

_Italic characters_

**bold characters**

__bold characters__

~~strikethrough text~~

    *Italic characters*
    _Italic characters_
    **bold characters**
    __bold characters__
    ~~strikethrough text~~

#### Lists
##### Unordered Lists

- Item 1
- Item 2

```
- Item 1
- Item 2
```

##### Ordered Lists

1. Step 1
2. Step 2
3. Step 3
	1. Step 3.1
	2. Step 3.2

    '1. Step 1
    2. Step 2
    3. Step 3
	   1. Step 3.1
	   2. Step 3.2'

#### Highlighting

Put back quotes around what you want to `highlight`

    Put back quotes around what you want to `highlight`

#### Horizontal Rule

They can be done three ways:

---
with hyphens
***
with asteriks
___
or underscores

    They can be done three ways:
    ---
    with hyphens
    ***
    with asteriks
    ___
    or underscores

#### Tables

Tables | Headers | First
--- | :---: | ---:
left align | centered | right align
1 | 2 | 3

    Table | Headers | First 
    --- | :---: | ---:
    left align | centered | right align
    1 | 2 | 3