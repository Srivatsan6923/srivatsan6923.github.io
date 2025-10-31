---
layout: single
title: "Comparative Analysis of 3D Super-Resolution Techniques: GANs, Diffusion Models, and CuNeRF"
permalink: /projects/superres/
author_profile: false
---

MiRL Lab, IIT Madras

---

<a href="/projects/" style="float: right; margin-bottom: 20px; font-weight: bold; text-decoration: none; color: #007acc;">
  ⬅ Projects
</a>
<div style="clear: both;"></div>

<p style="text-align:center; margin-top:25px;">
  🔗 <span style="font-weight:bold; color:#007acc;">GitHub: Private Repository</span>
  &nbsp;|&nbsp;
  <a href="Lorumipsum" target="_blank" 
  style="font-weight:bold; color:#007acc; text-decoration:none;">Project Report</a>
</p>


<section style="margin-top: 40px; line-height: 1.6;">

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: #067cf2ff; 
font-weight: 600;">Abstract</h3>

<p style="text-align: justify;">
    This project presents a comparative study of advanced 3D super-resolution techniques—Generative Adversarial Networks (GANs), Diffusion Models, and CuNeRF (Neural Radiance Fields)—for enhancing volumetric medical images. High-resolution 3D reconstructions are essential for accurate diagnosis but are often limited by acquisition constraints in CT and MRI. To address this, we focus on z-axis super-resolution, generating high-resolution volumes from low-resolution inputs. Using the IXI T1-weighted Brain MRI dataset, we evaluate the performance of Soup-GAN, DisC-Diff, and CuNeRF models through PSNR and SSIM metrics. The objective is to identify the most effective generative or implicit approach for achieving superior image fidelity and structural detail in 3D medical imaging.
</p>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: #067cf2ff; 
font-weight: 600;">Methodology</h3>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: #406a94ff; 
font-weight: 600;">SOUP-GAN: Super-Resolution MRI Using Generative Adversarial Networks</h3>

<p style="text-align: justify;">
    SOUP-GAN enhances MRI resolution by generating high-resolution (HR) thin-slice images from low-resolution (LR) thick-slice inputs. It employs a residual-in-residual dense block (RRDB) architecture combined with a perceptual-tuned GAN to preserve structural details across 3D volumes. The model’s total loss integrates pixel-wise, perceptual, and adversarial components, ensuring both visual fidelity and consistency. Its scale-attention network refines features across multiple resolutions through three stages — pre-attention, multi-scale processing, and post-attention refinement — resulting in sharper and more coherent 3D medical images.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/GAN.png" 
         alt="Soup_GAN" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<p style="text-align: justify;">
    SOUP-GAN achieved a PSNR of 16.51 and SSIM of 0.679 on the IXI T1-weighted Brain MRI dataset, demonstrating moderate reconstruction quality. The model effectively enhanced through-plane resolution along the z-axis, producing visually sharper and more continuous 3D slices compared to cubic interpolation. However, the results also indicate that while structural details were recovered, finer textures and high-frequency features remain partially underrepresented due to limited model capacity and GPU constraints.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/Soup_Gan-Results.png" 
         alt="Soup_GAN_Results" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>
  
  <h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: #406a94ff; 
font-weight: 600;">DisC-Diff: Disentangled Conditional Diffusion Model for MRI Super-Resolution</h3>
<p style="text-align: justify;">
    DisC-Diff is a diffusion-based framework designed for multi-contrast MRI super-resolution, enabling effective fusion of complementary information from different MRI sequences (e.g., T1, T2). The model uses a disentangled U-Net architecture that separates shared and independent feature representations before merging them in a decoder to reconstruct high-resolution images.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/DisC-Diff.png" 
         alt="DisC-Diff_Arch" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<p style="text-align: justify;">
    A Squeeze-and-Excitation (SE) module adaptively weights feature importance, while the combined disentanglement and Charbonnier losses ensure smoother convergence and improved edge preservation. The model employs a curriculum learning strategy that progressively trains on simpler to more complex anatomical regions. Through a forward diffusion process, Gaussian noise is added to HR images, and a reverse process reconstructs super-resolved outputs conditioned on multi-contrast inputs.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/Disc-Diff_Workflow.png" 
         alt="DisC-Diff_Workflow" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<p style="text-align: justify;">
    DisC-Diff achieved a PSNR of 32.14 and SSIM of 0.9612 on the IXI Brain MRI dataset, outperforming both single-contrast and multi-contrast super-resolution methods. The model effectively reconstructed fine anatomical details and maintained high structural fidelity, demonstrating the strong generative capability and stability of diffusion-based frameworks. Among all tested models, DisC-Diff delivered the most consistent and visually realistic 3D outputs, highlighting the potential of diffusion models for high-quality medical image enhancement.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/DisC-Diff_Results.png" 
         alt="DisC-Diff_Results" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 28px; color: #406a94ff; 
font-weight: 600;">CuNeRF: Cube-Based Neural Radiance Field for Medical Image Super-Resolution</h3>
<p style="text-align: justify;">
    CuNeRF extends Neural Radiance Fields (NeRF) for 3D medical image super-resolution using a cube-based volumetric representation. It integrates cube-based sampling, isotropic volume rendering, and hierarchical cube rendering to reconstruct high-quality medical volumes from low-resolution data.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/CuNeRF.png" 
         alt="CuNeRF_Framework" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<ul style="text-align: justify;">
    <li><strong>Cube-Based Sampling:</strong> Reduces grid artifacts by sampling multiple points within 3D cubes instead of fixed voxel grids.</li>
    <li><strong>Isotropic Volume Rendering:</strong> Integrates light contributions assuming isotropy in the volume density for realistic reconstruction.</li>
    <li><strong>Hierarchical Rendering:</strong> Refines predictions by resampling high-density regions, improving resolution and reducing artifacts.</li>
    <li><strong>Slice Synthesis:</strong> Enables arbitrary-scale and free-viewpoint slice generation for flexible visualization.</li>
</ul>

<p style="text-align: justify;">
    This approach achieves continuous high-fidelity volumetric reconstruction and arbitrary-scale super-resolution with fewer artifacts than traditional methods.
</p>

<p> 
    <p style="text-align: justify;">
    CuNeRF was trained using the Adam optimizer with a weight decay of 1×10⁻⁶ and a batch size of 2048 over 250,000 iterations. The learning rate was gradually reduced from 2×10⁻³ to 2×10⁻⁵. Each 240×240×155 volume required approximately 8 hours for training. During inference, sampling was reduced to 16 points (8 coarse, 8 fine) for efficiency, rendering a full volume in about 20–25 seconds. CuNeRF achieved a peak PSNR of 27.755 and SSIM of 0.818, demonstrating high reconstruction fidelity and structural consistency in medical image super-resolution.
</p>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/CuNeRF_scoreResult.png" 
         alt="CuNeRF_score" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<div style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
  <figure style="text-align:center;">
    <img src="/images/Superres/CuNeRF_Result.png" 
         alt="CuNeRF_Result" 
         style="width:85%; border-radius:12px; margin-bottom:10px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
  </figure>
</div>

<h3 style="text-align: left; margin: 50px 0 20px; font-size: 36px; color: #067cf2ff; 
font-weight: 600;">Conclusion & Future Directions</h3>

<p style="text-align: justify;">
    The DisC-Diff model demonstrated the best performance in MRI super-resolution, producing high-quality images with finer anatomical detail compared to SOUP-GAN and CuNeRF. While CuNeRF offered faster inference, it showed a noticeable drop in image quality.
</p>

<p style="text-align: justify;">
    However, some hallucination effects were observed in the DisC-Diff outputs, and its computational cost remains high, making it slower during inference. CuNeRF, though efficient, requires further refinement to match the fidelity required for medical applications.
</p>

<p style="text-align: justify;">
    Future work will explore hybrid architectures that combine diffusion-based detail preservation with the efficiency of implicit models like CuNeRF, along with clinical validation to ensure that improvements translate effectively to real-world medical practice.
</p>
</section>
