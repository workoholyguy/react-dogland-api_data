# Web Development Project 6 - Dog Adoption Gallery

Submitted by: **Omar Madjitov**

This web app: **Allows users to explore and view different dog breeds with details on their characteristics. Users can view each dog's details on a separate page, and a chart displays a distribution of weights by breed category.**

Time spent: **X** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app includes at least one unique chart developed using the fetched data that tells an interesting story**
  - Weight distribution chart shows the number of breeds within specific weight ranges.
- [x] **Clicking on an item in the list view displays more details about it**
  - Each dog card links to a unique details view where additional breed information is displayed.
- [x] **Clicking on an item has a direct, unique link to that item's detail view page**
  - Unique URLs for each dog breed’s detail view are visible in the address bar.

The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data.
- [ ] The site allows users to toggle between different data visualizations.

The following **additional** features are implemented:

* [x] **Back Home button** on each detail page for easy navigation.

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

Some challenges encountered while building the app included handling CORS errors and rate limits from the Dog API, which required us to limit fetch requests and ensure that the API key was correctly configured. Additionally, managing React Router to dynamically route each dog breed's unique detail page required careful setup to maintain smooth navigation.

## License

    Copyright [2024] [Omar Madjitov]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.