---
layout: single
title: "Robust and Efficient Critical View of Safety (CVS) Assessment from Surgical Video"
permalink: /projects/cvs_classification/
author_profile: false
---

MiRL Lab, IITM 

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: #007acc;">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

<p style="text-align:center; margin-top:25px;">
  🔗 <span style="font-weight:bold; color:#007acc;">GitHub: Private Repository</span>
  &nbsp;|&nbsp;
  <!-- <a href="https://drive.google.com/file/d/1aaWVmgHe0nmKkfrDaH6_7NKyxt3tsBcS/view?usp=sharing" target="_blank" 
  style="font-weight:bold; color:#007acc; text-decoration:none;">Project Report</a> -->
</p>


<p>
    The project focuses on automated assessment of the Critical View of Safety (CVS) during laparoscopic cholecystectomy, a well-established surgical safety standard aimed at reducing bile duct injuries. Accurate CVS assessment depends on the visual identification of three anatomical criteria, which is challenging in real-world surgical videos due to occlusions, camera motion, lighting variability, and domain shifts across clinical settings. The objective of this work was to develop robust computer vision models capable of reliable CVS classification while remaining practical for deployment in diverse and resource-constrained environments.
</p>

<p>
  To address CVS classification, a multiclass prediction pipeline was developed using self-supervised representation learning with DINOv2 pretrained on surgical video frames. The backbone was efficiently adapted to the task using Low-Rank Adaptation (LoRA), enabling task-specific fine-tuning with minimal additional parameters. For the computational efficiency, the model was further optimized through quantization and knowledge distillation, allowing CPU-only inference without substantial degradation in performance. This approach enabled a single architecture to perform competitively under both standard and constrained evaluation settings.
</p>

</p>
  In addition to classification, the project emphasizes trustworthy and interpretable surgical AI through scene-level understanding. Hepatocystic anatomy and surgical tool segmentation models were built by adapting SAMv2 with LoRA, enabling real-time segmentation of key anatomical structures and instruments relevant to CVS assessment. Segmentation performance was evaluated using COCO mAP@0.5 to prioritize accurate scene understanding while accounting for inherent boundary ambiguities in surgical anatomy. By combining CVS classification with anatomy and tool segmentation, this work demonstrates how self-supervised learning, efficient model adaptation, and multi-output vision systems can support clinically meaningful and deployable AI solutions for surgical safety.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: #406a94ff; 
font-weight: 600;"></h3>
<p>
    Qualitative results of hepatocystic anatomy and surgical tool segmentation during laparoscopic cholecystectomy. Raw endoscopic frames (left) are shown alongside model predictions (right), highlighting segmentation of key anatomical structures and instruments relevant to Critical View of Safety (CVS) assessment. 
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/CVS-Classification/CVS_segmentation.png" 
         alt="Hepatocystic anatomy and surgical tool segmentation" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

