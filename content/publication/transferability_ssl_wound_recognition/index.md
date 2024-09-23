---
title: 'Enhancing Chronic Wound Image Recognition with Non-Contrastive Self-Supervised Learning'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Wolfram Schenck

# Author notes (optional)
#author_notes:
#  - 'Equal contribution'
#  - 'Equal contribution'

date: '2024-09-17T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2024-09-17T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: Transferability of Non-contrastive Self-supervised Learning to Chronic Wound Image Recognition
publication_short: SSL for Wound Image Recognition

abstract: Chronic wounds pose significant challenges in medical practice, necessitating effective treatment approaches and reduced burden on healthcare staff. Computer-aided diagnosis (CAD) systems offer promising solutions to enhance treatment outcomes. However, the effective processing of wound images remains a challenge. Deep learning models, particularly convolutional neural networks (CNNs), have demonstrated proficiency in this task, typically relying on extensive labeled data for optimal generalization. Given the limited availability of medical images, a common approach involves pretraining models on data-rich tasks to transfer that knowledge as a prior to the main task, compensating for the lack of labeled wound images. In this study, we investigate the transferability of CNNs pretrained with non-contrastive self-supervised learning (SSL) to enhance generalization in chronic wound image recognition. Our findings indicate that leveraging non-contrastive SSL methods in conjunction with ConvNeXt models yields superior performance compared to other work's multimodal models that additionally benefit from affected body part location data. Furthermore, analysis using Grad-CAM reveals that ConvNeXt models pretrained with VICRegL exhibit improved focus on relevant wound properties compared to the conventional approach of ResNet-50 models pretrained with ImageNet classification. These results underscore the crucial role of the appropriate combination of pretraining method and model architecture in effectively addressing limited wound data settings. Among the various approaches explored, ConvNeXt-XL pretrained by VICRegL emerges as a reliable and stable method. This study makes a novel contribution by demonstrating the effectiveness of latest non-contrastive SSL-based transfer learning in advancing the field of chronic wound image recognition.

# Summary. An optional shortened abstract.
summary: Chronic wounds are challenging to treat, but computer-aided diagnosis systems using deep learning models can help. This study shows that ConvNeXt models pretrained with non-contrastive self-supervised learning (SSL) outperform other models in recognizing chronic wound images. ConvNeXt-XL pretrained with VICRegL provides superior performance and better focus on wound features compared to conventional methods, demonstrating the benefits of modern SSL techniques in improving wound image analysis.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: 'https://link.springer.com/content/pdf/10.1007/978-3-031-72353-7.pdf'
url_code: 'https://github.com/julien-marteen-akay/Transferability-SSL-Wound-Recognition'
#url_dataset: 'https://github.com/HugoBlox/hugo-blox-builder'
#url_poster: ''
#url_project: ''
#url_slides: ''
url_source: 'https://link.springer.com/chapter/10.1007/978-3-031-72353-7_31'
#url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
#image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
#  focal_point: ''
#  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
#projects:
#  - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: example



# <PLACE BELOW '---'>, I.E. MARKDOWN CONTENT
#{{% callout note %}}
#Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
#{{% /callout %}}
 
#{{% callout note %}}
#Create your slides in Markdown - click the _Slides_ button to check out the example.
#{{% /callout %}}

#Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
# </PLACE BELOW '---'>
---
