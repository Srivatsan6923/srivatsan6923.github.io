---
layout: single
title: "2D to 3D Reconstruction of Coronary Artery from X-ray Angiogram Images and Analysis of vFFR Techniques"
author_profile: false
---

MiRL Lab, IITM & Meril Life Sciences Project

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: var(--accent);">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

<p style="text-align:center; margin-top:25px;">
  🔗 <span style="font-weight:bold; color:var(--accent);">GitHub: Private Repository</span>
  &nbsp;|&nbsp;
  <a href="https://drive.google.com/file/d/1D5WoSKFwGyUa65Blt3mYDzh_MkCXaQa3/view?usp=sharing" target="_blank" 
  style="font-weight:bold; color:var(--accent); text-decoration:none;">Project Report</a>
</p>


<section style="margin-top: 40px; line-height: 1.6;">

<p>
    X-ray Coronary Angiography (XCA) is a crucial diagnostic tool for assessing coronary artery disease (CAD), yet its two-dimensional nature limits accurate visualization of complex vessel morphology. To overcome these limitations, Three-Dimensional Quantitative Coronary Angiography (3D-QCA) has emerged, enabling reconstruction of coronary arteries from multiple angiographic views—an essential step for computational fluid dynamics (CFD) simulations such as virtual Fractional Flow Reserve (vFFR). These advanced 3D models significantly enhance diagnostic precision and treatment planning.

    Despite its potential, current 3D-QCA methods face key challenges, including the manual, slow, and variable process of lumen border detection, as well as the high computational cost and technical expertise required for accurate reconstruction and vFFR computation. Such limitations hinder clinical workflow efficiency and reproducibility.

</p>

<p>
  This project develops an end-to-end framework for three-dimensional coronary artery reconstruction from two-view X-ray angiography using epipolar geometric constraints. Vessel centerlines are extracted from contrast-enhanced angiograms and corresponding points are matched across projections to recover 3D geometry. To improve reconstruction fidelity, the pipeline incorporates motion correction and artifact handling to mitigate the effects of cardiac motion, table movement, and imaging noise, enabling stable and anatomically consistent coronary reconstructions from routine clinical acquisitions.
</p>

<p>
  Based on the reconstructed coronary geometry, the pipeline performs lumen profiling along the vessel to assess lesion severity and estimate physiological impact. Vessel-based fractional flow reserve (vFFR) is computed using a pseudo-transient hemodynamic analysis that approximates pressure drop and flow behavior without the need for invasive pressure-wire measurements. In addition, non-invasive metrics such as angiography-based FFR (caFFR) and the index of microcirculatory resistance (caIMR) are derived from the same geometry. Together, these physiological indices go beyond visual inspection by providing functional insight into coronary lesions, demonstrating how geometry-aware computer vision, geometric modeling, and simplified flow analysis can support clinically interpretable coronary assessment from standard angiographic data.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/2D-3D_Recon/3D_recon_sample_report.png" 
         alt="Sample 2D-3D_Reconstruction and vFFR Analysis Report for Real Data" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>
