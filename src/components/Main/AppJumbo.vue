<script>
export default {
    name: 'AppJumbo',
    
}
</script>

<template lang="">
    <div class="jumbo">
        <div class="row align-items-center m-0  h-100">
            <div class="col-6">
                <div class="content text-white">
                    <img src="https://occ-0-173-2581.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX_vB7HwidGrPts5ivwR-Ab6oaf5DPolBPGqCfbAMtLwxR2f6_HdxjkIgyqkhQZ1fOXRkcnWEN31itPyc_y02IoDC81zxUryo_gY1nn1pd-l.webp?r=642" alt="">
                    <div class="py-4 px-2  ">Mentre una minaccia tossica incombe sulla città corrotta, Bruce Wayne entra in conflitto con una lega di assassini e deve affrontare non solo i propri demoni.</div>          
                    <button class="my-btn"><i class="bi bi-play-fill"></i>Riproduci</button>
                    <button class="my-btn-gray mx-2 text-white"><i class="bi bi-info-circle"></i>Altre Info</button>
                </div>
            </div>
            <div class="col-6 position-relative w-50 h-100">
                <div class="plate">
                    13 &plus;
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.jumbo{
    height: 100vh;
    background-image: url('https://occ-0-173-2581.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABe69iu5nvnJtTVcahFi4mmgYAjYJZidl3VGJFbCYWAxjymfnOiMzGAJJg1R1nCvEA6bTxt43QIR-PlUClkRugop20O9bEjpojB-N.webp?r=f85');
    background-size: cover;

    .content{
        width: 70%;
        padding-left: 40px;

        .my-btn,
        .my-btn-gray{
            padding: 5px 20px;
            border-radius: 5px;
            border: none;
        }

        .my-btn-gray{
            background-color: rgba(82, 82, 82, 0.818);
        }

        .bi-info-circle::before,
        .bi-play-fill::before{
            font-size: 25px;
            vertical-align: middle;
        }
        .bi-info-circle::before{
            padding-right: 10px;
        }

    }
    .plate{
        width: 90px;
        color: white;
        padding: 5px 10px;
        border-left: 3px solid white;
        position: absolute;
        right: 0;
        bottom: 20%;
        background-color: rgb(41,40,35);
    }
    img{
        width: 100%;
        height: 100%;
    }
}
</style>