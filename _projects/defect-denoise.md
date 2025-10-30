---
layout: single
title: "Defect-Aware Image Denoising and Deblurring Network"
permalink: /projects/defect-denoise/
author_profile: false
---

EE5179 - Deep Learning for Imaging (KLA Project), IIT Madras 

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: #007acc;">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

 <p style="text-align:center; margin-top:25px;">
  🔗 <a href="https://github.com/Srivatsan6923/EE5179-Deep-Learning-for-Imaging_KLA_Project" target="_blank" 
  style="font-weight:bold; color:#007acc; text-decoration:none;">GitHub Repo</a> 
  &nbsp;|&nbsp; 
  <a href="https://drive.google.com/file/d/1X8d_Z5j78lN19-kCOrXgBtV7GUX3xsfN/view?usp=sharing" target="_blank" 
  style="font-weight:bold; color:#007acc; text-decoration:none;">Project Report</a>
</p>


<section style="margin-top: 40px; line-height: 1.6;">

  <h3 style="text-align: center; margin: 50px 0 20px;">Abstract</h3>
  <p>
    Image restoration plays a vital role in domains like medical imaging, surveillance, and industrial inspection, where recovering clean images from noisy or blurred inputs is essential. We propose a novel U-Net-based restoration network enhanced with Spatial and Channel Attention (SCA) and non-local blocks to capture both local and global dependencies. This design effectively removes noise and blur while preserving subtle yet critical defect features. By dynamically emphasizing important regions through attention mechanisms, the network ensures accurate and detail-preserving restoration.
  </p>


  <h3 style="text-align: center; margin: 50px 0 20px;">Methodology</h3>
  <p>
    The proposed <strong>U-Net-based image restoration network</strong> integrates 
    <strong>Spatial and Channel Attention (SCA)</strong> and <strong>non-local blocks</strong> 
    to capture both local and global dependencies within images. The 
    <strong>non-local block</strong> enhances contextual understanding from distant regions, 
    preserving subtle and fine defect details. A residual connection improves gradient flow, 
    enabling stable training and robust feature learning.
  </p>

  <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">

  <figure style="text-align:center;">
    <img src="/images/KLA_Project/Proposed_Model.png" 
         alt="Architecture of the proposed network for image restoration" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
      Architecture of the proposed network for image restoration
    </figcaption>
  </figure>


  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    
  <figure style="width:45%; text-align:center;">
    <img src="/images/KLA_Project/SCA_Module.png" 
        alt="Spatial and Channel Attention Module" 
        style="width:100%; border-radius:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
    Spatial and Channel Attention Module
    </figcaption>
  </figure>

  <figure style="width:45%; text-align:center;">
    <img src="/images/KLA_Project/NLB_Module.png" 
        alt="Non-Local Block Module" 
        style="width:100%; border-radius:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
    Non-Local Block Module
    </figcaption>
  </figure>

  </div>

</div>

  <p>
    Training was performed on the <strong>MVTec Anomaly Detection (AD)</strong> dataset, 
    where clean images were artificially degraded using noise and blur to form input–target pairs. 
    The model was implemented in <strong>PyTorch</strong> with approximately <strong>868K parameters</strong> 
    and trained for <strong>250 epochs</strong> on an <strong>NVIDIA T4 GPU</strong> using the 
    <strong>Adam optimizer (lr = 0.001)</strong>.
  </p>

  <p style="margin-bottom: 10px;">A composite loss function was used:</p>
  <ul style="margin-left: 20px;">
    <li><strong>Charbonnier Loss</strong> – ensures pixel-level accuracy</li>
    <li><strong>SSIM Loss</strong> – maintains perceptual image quality</li>
    <li><strong>Edge Loss</strong> – preserves fine edge structures</li>
  </ul>

  <p style="text-align:center; font-size:15px; background:#f8f9fa; padding:10px 20px; border-radius:8px; border:1px solid #eee; display:inline-block;">
  <strong>L = L<sub>char</sub> + 0.1·L<sub>edge</sub> + 0.3·L<sub>ssim</sub></strong>
  </p>
  
  <hr style="margin: 40px 0;">

  <h3 style="text-align: center; margin: 50px 0 20px;">Observations</h3>

  <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
    
  <figure style="width:45%; text-align:center;">
    <img src="/images/KLA_Project/AvgPSNR.png" 
        alt="Average PSNR Values for Each Category" 
        style="width:100%; border-radius:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
    Average PSNR Values for Each Category
    </figcaption>
  </figure>

  <figure style="width:45%; text-align:center;">
    <img src="/images/KLA_Project/AvgSSIM.png" 
        alt="Average SSIM Values for Each Category" 
        style="width:100%; border-radius:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
    Average SSIM Values for Each Category
    </figcaption>
  </figure>

  </div>

  <p>
    Model performance was evaluated using <strong>Peak Signal-to-Noise Ratio (PSNR)</strong> 
    and <strong>Structural Similarity Index Measure (SSIM)</strong>.
  </p>

  <ul style="margin-left: 20px;">
    <li><strong>Average PSNR:</strong> 30.55 dB</li>
    <li><strong>Average SSIM:</strong> 0.845</li>
  </ul>

  <div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">

  <figure style="text-align:center;">
    <img src="/images/KLA_Project/KLA_Project_Observation.png" 
         alt="Architecture of the proposed network for image restoration" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
    <figcaption style="font-size:14px; margin-top:6px; color:#666;">
      Sample Results
    </figcaption>
  </figure>
  </div>

  <p>
    High PSNR and SSIM scores demonstrate that the model effectively restores image quality 
    while preserving critical defect regions. Object types such as 
    <em>capsule</em>, <em>pill</em>, and <em>screw</em> achieved the best restoration fidelity, 
    confirming the network’s adaptability across textures and materials.
  </p>

  <hr style="margin: 40px 0;">

  <h3 style="text-align: center; margin: 50px 0 20px;">Conclusion</h3>
  <p>
    The <strong>Attention-Enhanced U-Net</strong> achieves superior image restoration performance 
    by leveraging <strong>attention mechanisms</strong> and <strong>non-local context modeling</strong>. 
    It effectively removes noise and blur while maintaining structural integrity and fine defect details.
  </p>

  <p>
    This architecture presents a robust solution for 
    <strong>defect-preserving image restoration</strong> in industrial and medical imaging applications.
  </p>


</section>
