---
layout: single
title: "FusionDecompNet: A Multimodal Multitask Learning Framework for Alzheimer’s Diagnosis via Joint MRI-PET Fusion and Auxiliary Modality Reconstruction"
author_profile: false
---

Dr. Ram Thaila Scholarship Project | Guide: Varun P. Gopi | MICAIH Lab, NIT Trichy

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: var(--accent);">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

<p style="text-align:center; margin-top:25px;">
  🔗 <span style="font-weight:bold; color:var(--accent);">GitHub: Private Repository</span>
  &nbsp;|&nbsp;
  <a href="-" target="_blank" 
  style="font-weight:bold; color:var(--accent); text-decoration:none;">Project Report</a>
</p>


<section style="margin-top: 40px; line-height: 1.6;">

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent); 
font-weight: 600;">Abstract</h3>

<p style="text-align: justify;"><p style="text-align: justify;">
    Alzheimer’s disease (AD), a progressive neurodegenerative disorder and the leading cause of dementia, affecting over 33 million people globally. With the aging population increasing—especially in low- and middle-income countries—the number of AD cases is expected to reach 152 million by 2050. Characterized by betaamyloid plaques, tau tangles, and progressive brain atrophy, AD leads to memory loss and cognitive decline. Early and accurate diagnosis is crucial for timely intervention yet remains a significant challenge. Multimodal neuroimaging, particularly Magnetic Resonance Imaging (MRI) and Positron Emission Tomography (PET), provides complementary information about the brain’s structure and function. However, effectively integrating these modalities remains a complex task. To address this, a unified multitask deep learning framework (FusionDecompNet) is proposed that combines multimodal image fusion, auxiliary decomposition, and cognitive status classification to enhance AD diagnosis. 
    
    MRI and PET images are processed through parallel encoders using multi-scale convolutions and attention mechanisms to extract rich, modality-specific features. These are fused via a triple attention mechanism to generate a unified representation capturing both structural and functional information. The decomposer module reconstructs the input modalities, providing a self-supervised signal that helps the model learn distinct and informative features. The fused image is then used by a classification module to predict cognitive status for multiclass diagnosis, distinguishing among Normal Control (NC), Mild Cognitive Impairment (MCI), and Alzheimer’s Disease (AD) classes. 
    
    Experimental evaluations demonstrate superior performance compared to unimodal and single-task baselines. This work presents a robust, interpretable, and end-to-end deep learning solution for Alzheimer’s Disease diagnosis, offering significant potential for clinical translation and early-stage cognitive assessment.
</p>


<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: var(--accent); 
font-weight: 600;">Methodology</h3>

<p style="text-align: justify;">
    The proposed system for Alzheimer’s Disease (AD) diagnosis is built on a <b>multimodal, multitask deep learning framework</b> designed to integrate both structural and functional brain information from <b>T1-weighted MRI</b> and  <b>FDG-PET</b> scans. The objective is to improve the diagnostic accuracy and interpretability of AD progression by leveraging the complementary nature of these imaging modalities.
</p>
<p style="text-align: justify;">
    The model jointly learns three interrelated tasks: 
    <b>(1)</b> multimodal image fusion, 
    <b>(2)</b> auxiliary decomposition of the fused representation into 
    modality-specific components, and 
    <b>(3)</b> disease classification. 
    This multitask setup enables the network to simultaneously optimize for both representational quality and clinical classification performance.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/FusionDecompNet.png" 
         alt="Model Architecture Overview" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
    <figcaption style="font-size:14px; color:var(--text-muted);">Overview of the multimodal multitask deep learning system for Alzheimer's Disease diagnosis.</figcaption>
  </figure>
</div>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/Modules.png" 
         alt="" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
    <figcaption style="font-size:14px; color:var(--text-muted);">Internal Architecture of the Proposed MRI–PET Fusion Framework Showing Multi-scale Convolution, Triple Attention, Classification, and Decomposer Blocks</figcaption>
  </figure>
</div>
<p style="text-align: justify;">
    The architecture begins with <b>parallel feature extraction pathways</b> for MRI and PET images. Each pathway employs multi-scale convolutional encoders enhanced with attention mechanisms to capture both shallow structural cues and deep semantic representations unique to each modality. The extracted features are adaptively merged using a <b>Triple Attention Fusion Module</b>, which selectively emphasizes modality-specific regions and contextual dependencies.
</p>

<p style="text-align: justify;">
    To ensure the fused image retains meaningful information from both modalities,  a <b>Decomposer Module</b> reconstructs the original MRI and PET images from the fused representation. This auxiliary self-supervised learning objective, guided by reconstruction loss, enforces the preservation of critical modality-relevant information and prevents overfitting to classification signals alone.
</p>

<p style="text-align: justify;">
    The <b>Classification Module</b> receives the fused representation and outputs the cognitive state of the subject — categorized as <b>Normal Control (NC)</b>, <b>Mild Cognitive Impairment (MCI)</b>, or <b>Alzheimer’s Disease (AD)</b>. The decomposition and classification branches are trained jointly, ensuring that the network learns disentangled yet complementary features. This multitask design improves <b>robustness, interpretability, and diagnostic precision</b>, effectively bridging multimodal fusion and clinical decision-making in AD analysis.
</p>

<p style="text-align: justify;">
    Overall, this unified multitask learning framework integrates <b>fusion, decomposition, and classification</b> in a single architecture, enabling efficient joint optimization and improved generalization. The auxiliary decomposition task further acts as a regularizer, guiding the fusion process toward more <b>interpretable and physiologically meaningful representations</b>—a crucial step toward explainable and data-efficient  neuroimaging analysis.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent); 
font-weight: 600;">Implementation</h3>

<p style="text-align: justify;">
    The model was developed on a <b>high-performance Ubuntu 20.04 system</b> (Intel i9-12900K, 128 GB RAM, NVIDIA RTX A6000 48 GB VRAM) using <b>Python 3.9 / PyTorch 2.0.1</b>. Key libraries included <b>MONAI</b> and <b>SimpleITK</b> for medical imaging,  <b>nibabel</b> for NIfTI handling, and <b>Albumentations</b> for augmentations.  CUDA 11.8 with cuDNN enabled efficient GPU acceleration.
</p>

<p style="text-align: justify;">
    The preprocessing pipeline ensured consistent, high-quality multimodal inputs.  <b>FDG-PET scans were rigidly registered to MRI</b> using mutual-information alignment,  resampled to <b>1×1×1 mm</b> spacing, and standardized to <b>128³ voxels</b>.  <b>MRI</b> intensities were <b>Z-score normalized</b>, while <b>PET</b> values used  <b>min-max scaling</b> (0–1 range). Data augmentation introduced random rotations,  elastic deformations, Gaussian noise, and intensity shifts to enhance robustness. 
    The normalized MRI and PET volumes were <b>stacked channel-wise</b> as multimodal inputs,  with labels one-hot encoded for binary and multiclass AD classification.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/MRI-PET_Preprocessing_Pipeline.png" 
         alt="MRI and PET Preprocessing Pipeline" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
    <figcaption style="font-size:14px; color:var(--text-muted);">MRI and PET preprocessing and alignment pipeline for multimodal input generation.</figcaption>
  </figure>
</div>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: var(--accent); 
font-weight: 600;">Experimental Results</h3>

<p style="text-align: justify;">
The proposed multi-modal fusion model demonstrated strong performance across the  three-class classification task (NC vs. MCI vs. AD), achieving a <b>94.7% accuracy</b> and outperforming  multiple baseline CNN and transformer-based fusion methods. The decomposition module enabled  high-fidelity MRI and PET reconstruction (SSIM ≈ 0.87–0.84; PSNR ≈ 31–30 dB), indicating effective  retention of modality-specific features. Ablation studies confirmed that the decomposition module, attention-based fusion, and modality-specific encoders each significantly contribute to the final performance, highlighting the model’s effectiveness in learning complementary structural and functional brain information.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/Table1.png" 
         alt="Classification Performance Table" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/Table2.png" 
         alt="Reconstruction Performance Table" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/Table3.png" 
         alt="Baseline Comparison Table" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Alzheimers/Table4.png" 
         alt="Ablation Study Table" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>
</section>
