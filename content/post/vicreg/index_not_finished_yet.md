---
title: VICReg for Non-Contrastive Self-Supervised Learning
date: '2023-7-06'
summary: Learning without labels, contrastive pairs and complicated tricks. VICReg does just that, allowing multi-modality, arbitrary model architectures and more.
---

**This blog post serves to reflect the idea in a nutshell.**  
If you want mathematical details you are wrong here, that’s what the [paper](https://arxiv.org/abs/2105.04906) is for 😐

**Read on if you want to know the answers to the following questions**  
- Why self-supervised learning (SSL)?
- Why non-contrastive SSL?
- What’s up with VICReg?
- Then I’ll give you some additional info/low hanging fruit.

---

## Why self-supervised learning (SSL)?

You want to train a model to classify or segment images. Then you also need the labels or segmentation masks, respectively.

But you have no labels or not enough labels. Is your data worthless now?  
With supervised learning yes, with self-supervised learning no 🤔

![png](output_1_0.png)


```python
from IPython.core.display import Image
Image('https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png')
```

    
![png](output_1_0.png)
    

```python
print("Welcome to Academic!")
```

    Welcome to Academic!

## Organize your notebooks

Place the notebooks that you would like to publish in a `notebooks` folder at the root of your website.

## Import the notebooks into your site

```bash
pipx install academic
academic import 'notebooks/**.ipynb' content/post/ --verbose
```

The notebooks will be published to the folder you specify above. In this case, they will be published to your `content/post/` folder.
