
# Web Development Project 5 - **Dog Adoption Gallery**

Submitted by: **Omar Madjitov**

This web app: **Displays a gallery of adoptable dogs with detailed breed information, allows users to filter dogs by breed group, and shows key statistics about the dog data fetched from a public API.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The list displays a list of data fetched using an API call**
- [x] **Data uses the useEffect React hook and async/await syntax**
- [x] **The app dashboard includes at least three summary statistics about the data such as:**
  - [x] *Total number of breeds*
  - [x] *Average weight of dogs*
  - [x] *Average lifespan of dogs*
- [x] **A search bar allows the user to search for an item in the fetched data**
- [x] **Multiple different filters (2+) allow the user to filter items in the database by specified categories**
  - [x] *Filter by breed group using buttons*

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [ ] Filters use different input types such as a text input, a selection, or a slider
- [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [ ] List of all unique breed groups with dynamic buttons for filtering
* [ ] Detailed dog cards with breed information, including weight, life span, and temperament

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

One of the challenges encountered was correctly extracting breed information and ensuring it was used consistently for both displaying details and filtering by breed group. Another challenge was handling edge cases where some dogs lacked specific breed data, which required careful error handling to avoid breaking the app.

## License

    Copyright 2024 Omar Madjitov

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
