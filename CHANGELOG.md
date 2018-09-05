## [ChangeLog - 09/05/2018](#)
<b>Added</b>
- [.underline-list-group](http://gitrh01.revisor.mn.gov/legislature/2018_design/blob/master/styles/scss/_lnet-type.scss#L18-51)
- partial: _lnet-tables.scss
- [.table {.thead-lightdark {th{a and a:hover}}}](http://gitrh01.revisor.mn.gov/legislature/2018_design/blob/master/styles/scss/_lnet-tables.scss#L1-21)

<b>Changed</b>
- changed $gray-600 back to Bootstrap default. This affects any instance of xx-secondary
- $breadcrumb-divider: quote(">");
- display-x size and weights

<b> Removed</b>

## [ChangeLog - 08/15/2018](http://gitrh01.revisor.mn.gov/legislature/2018_design/compare/1e0dbfb9...1b4bde91)

<b>Added</b>
- banner images
- top, body, footer includes files. (no longer updating other html)
- variables changed with bootstrap update
- _lnet-card.scss
- preliminary print page styling
- color: $wheat: #f5deb3, mapped as $attn (use .bg-attn, .text-attn, etc..)
classes:
- leg-footer (sticky footer)
- leg-search-form
- skip-navigation
- card-info


<b>Changed</b>
- Bootstrap 4.0.1 beta to 4.1.3
- Many changes to header and footer html

<b> Removed</b>
- .card-body li{border-bottom:1px solid #ddd;} !!use .border-bottom on li

This is an abbreviated list of changes. See [full comparison.](http://gitrh01.revisor.mn.gov/legislature/2018_design/compare/1e0dbfb9...1b4bde91)


## [ChangeLog - 06/28/2018](http://gitrh01.revisor.mn.gov/legislature/2018_design/compare/master...reboot)

<b>Added</b>
- Added menu text affordances
- classes:
  - .js-search, .js-search-btn
  - .leg-brand, .leg-brand-container
  - .leg-title-text-2-lines
  - .leg-subtitle-text
- variables
  - $darkgray:#212529 for use in themes (bg-darkgray)


<b>Changed</b>
- Banner search
- .leg-title-container moved to bottom of .leg-banner
- .legBanner now .leg-banner
- .bg-dark height from 15rem to 13.3rem
- .navbar-nav-collapse from 3rem to 2.2rem
- #main_search: doesn't conform to Code Guide, .js-search
- moved <font-family: 'Roboto', sans-serif> from body to html

<b> Removed</b>



