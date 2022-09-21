# Asynchronous behavior, part 1

## Follow-ups from last week:

1.  Putting data on the map
    - Working with SDP school list data
      - Think of `schools` as a table: a collection of records that all have the same fields (attributes), but with different values.
      - JavaScript is not like R or Pandas; can think of `schools` like a table, but can't treat it like one.
    - JS isn't built around tables.
      - **[Arrays](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/arrays.md) are important!**
      - **[Objects](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/objects.md) are important!**
      - **[Functions](https://github.com/musa-611-fall-2022/course-info/blob/main/resources/functions.md) are important!**

    - Let's work with a real data set
      - You've already contributed to a dataset ([class dossier](https://musa-611-fall-2022.github.io/class-dossier/) -- open the console and inspect the `people` variable)
      - We'll explore some information about schools in Philadelphia
        - A couple sources: [OpenDataPhilly](https://opendataphilly.org/organization/school-district-of-philadelphia), or the [School District of Philadelphia](https://www.philasd.org/performance/programsservices/open-data/school-information/)
        - Browsing data in the console
        - Counting data
        - Iterating over data (but why 🤔?)
        - Transforming data (e.g., plucking attributes, reshaping)
        - Aggregating data (e.g. counteach, ...)
        - Filtering data
        - Sorting data
1.  Introducing form elements
1.  Laying out a page
    - The CSS box model, flex box, grid
    - Manipulating styles in the developer tools
      * Let's have a bit of fun with https://www.nytimes.com/interactive/2022/09/09/climate/growing-wildfire-risk-homes.html

## Next steps:

1.  Responding to interaction
    - On the map
    - Through form elements
1.  Manipulating the DOM
    - The what? (basically, the HTML document structure)