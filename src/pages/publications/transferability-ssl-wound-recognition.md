---
# Set the layout for this page
layout: ../../layouts/MarkdownLayout.astro

# Frontmatter extracted and adapted from the original Hugo file
title: 'Transferability of Non-Contrastive Self-Supervised Learning to Chronic Wound Image Recognition'
description: 'Study investigating the transferability of CNNs pretrained with non-contrastive self-supervised learning (SSL) to enhance generalization in chronic wound image recognition.'
date: '2024-09-17'
authors: 
  - Julien Marteen Akay # Replaced 'admin' with actual name
  - Wolfram Schenck
publication_type: 'paper-conference'
publication: 'Transferability of Non-contrastive Self-supervised Learning to Chronic Wound Image Recognition'
publication_short: 'SSL for Wound Image Recognition'
summary: 'ConvNeXt models pretrained with non-contrastive self-supervised learning (SSL) outperform other models in recognizing chronic wound images, demonstrating the benefits of modern SSL techniques.' # Shortened summary

# Links (These will be used by the layout)
url_pdf: 'https://link.springer.com/chapter/10.1007/978-3-031-72353-7_31'
url_code: 'https://github.com/julien-marteen-akay/Transferability-SSL-Wound-Recognition'
url_source: 'https://link.springer.com/chapter/10.1007/978-3-031-72353-7_31'

# Optional: Add tags if needed later
tags: []
---

## Abstract

Chronic wounds pose significant challenges in medical practice, necessitating effective treatment approaches and reduced burden on healthcare staff. Computer-aided diagnosis (CAD) systems offer promising solutions to enhance treatment outcomes. However, the effective processing of wound images remains a challenge. Deep learning models, particularly convolutional neural networks (CNNs), have demonstrated proficiency in this task, typically relying on extensive labeled data for optimal generalization. Given the limited availability of medical images, a common approach involves pretraining models on data-rich tasks to transfer that knowledge as a prior to the main task, compensating for the lack of labeled wound images. 

In this study, we investigate the transferability of CNNs pretrained with non-contrastive self-supervised learning (SSL) to enhance generalization in chronic wound image recognition. Our findings indicate that leveraging non-contrastive SSL methods in conjunction with ConvNeXt models yields superior performance compared to other work's multimodal models that additionally benefit from affected body part location data. Furthermore, analysis using Grad-CAM reveals that ConvNeXt models pretrained with VICRegL exhibit improved focus on relevant wound properties compared to the conventional approach of ResNet-50 models pretrained with ImageNet classification. These results underscore the crucial role of the appropriate combination of pretraining method and model architecture in effectively addressing limited wound data settings. Among the various approaches explored, ConvNeXt-XL pretrained by VICRegL emerges as a reliable and stable method. 

This study makes a novel contribution by demonstrating the effectiveness of latest non-contrastive SSL-based transfer learning in advancing the field of chronic wound image recognition. 