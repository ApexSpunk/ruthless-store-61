import { Box, Container, Flex, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import InvitePromo from '../Components/InvitePromo'

function Home() {



  const [images, setImages] = useState([
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/d037de3b-59e8-4b09-b5a0-420cbc0f62e81663583369408-Main-Banner---Desktop-Template_02.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/fe9bb930-63f0-4988-8bb7-00ceb56cc43d1663583369417-Main-Banner---Desktop-Template_03.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/fb195dd7-ee2f-4c98-86b9-36c43e87593a1663583369423-Main-Banner---Desktop-Template_04.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/58024596-d30e-4aa7-916e-ee8cdbcf64181663583369431-Main-Banner---Desktop-Template_05.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/b9c8cc4e-67eb-4e38-a0f4-edc80c9bf6ae1663583369438-Main-Banner---Desktop-Template_06.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/8ae31d41-f319-4fab-9193-98d6ae6b31531663583369445-Main-Banner---Desktop-Template_07.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/cae9815e-fc83-4478-bb33-1156c0fbcfd91663583369451-Main-Banner---Desktop-Template_08.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/936fef27-0744-41a7-a3db-0bc689454dbd1663583369458-Main-Banner---Desktop-Template_09.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/77357090-2b3d-44e2-b902-d9dfade5e2931663583369467-Main-Banner---Desktop-Template_10.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/95de07cb-8354-4920-8d5a-fb127785f44a1663583369486-Main-Banner---Desktop-Template_11.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/bba785bb-00ff-4f6a-9878-17099e78c9d21663583369493-Main-Banner---Desktop-Template_12.jpg",
    "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/dc130b69-91ec-4fcd-9870-b8fcba71b6d01663583369501-Main-Banner---Desktop-Template_13.jpg",
    "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/25/19ac06bf-2759-4f40-bbab-0fadce5545331664078338467-1-2-DK-599-STore_01.gif",
    "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/25/cdaf463d-3cb7-45e9-90f0-23c8b8667f331664078338460-1-2-DK-599-STore_02.gif",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/22/d246ea0a-af18-4a62-a8ef-25e02df352871663841721199-1222.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/114a77ab-c899-4c9b-b3a9-804a33467c1e1661679288161-Lavie--Caprese---More-0-0.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/0f64912f-efea-4a68-9649-983eabff21501661679126333-Allen-Solly--Van-Heusen---More--0-1.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/b1737cbc-9c87-448d-801c-f31a4220173a1661679126378-Baggit--Fastrack---More-0-2.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/d6e93fb9-5eff-4c6f-b1ea-b37082ca1c2b1663322927828-image_png1196642469.png",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/d4692ae2-89b0-4bc5-8f1f-d98e7c184a4b1663322952733-image_png1067653447.png",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/184e0624-aecd-4a9a-b56f-010789b2ecc81661679288602-USPA--UCB---more-0-6.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/8454be24-4936-43ba-9994-13336ee07b7d1663322980934-image_png1026576000.png",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/a83cf0bc-96bc-4623-9217-bb1d0e4b51df1663323020314-image_png1526373477.png",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/45014f53-1c9f-40fa-bad6-d619e6aa78d41661679126363-Asian--Sparx---more-0-9.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/068aa88f-9e1a-4c66-9a2a-4e84902cda9f1663323043058-image_png_1211474772.png",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/e5887c61-8682-4c49-b785-f2fe37ae91d31663583200397-Budget-Buys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/5218df25-96c1-47cf-b355-bdca66abcf961661849014553-InnerwearMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/790c029f-b7b8-431c-b18a-6a2cccbca7ad1661849014597-Kurtas_KurtaSetsMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/7f7d5574-ae1d-4687-945c-e59a3b8e0c161661849014635-LoungewearMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/bc4d2dac-1cf0-456c-bd00-94ebc44470211661849014688-Shampoos_-Conditioners_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/f0d7b593-7310-4a8d-b5e6-4acfb4a871c31661849014836-Trimmers_Epilators_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/4b054066-98e6-416b-8e8c-36ca33dc52891661849014671-Perfumes_Body-Mists_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/80bd7ca0-b032-4714-b5d4-b6db4d47af541661849014877-TShirtsMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/7629f055-9ee0-4f31-9dd9-c8ff73b1bde01661849014505-FlipFlops_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/95bbec83-d785-41e1-9a70-a4578cb52a7f1661849014562-JeansMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/677f0998-6988-49c8-ba23-ba456faf11941661849014697-ShirtsMen_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/b1c1fd0b-08ad-49c1-aaea-7ec7591de97e1661849014747-SportsShoes_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/c1c98a9d-6d2e-4035-be0a-ebd7cbdd27441661849014440-CasualShoes_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/60698b8a-9db2-4ed0-aa47-36198960eb9b1661849014907-Watches_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/64bdb7f7-bc5a-4f05-b663-118a367b19ff1661849014497-Flats_Heels_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_65,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/d8cc7112-2a95-49be-adcb-70cef6e7de351661849014530-Headphone_BudgetBuys.jpg",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/4cc74165-3286-49ec-81a5-2fa5d43595071663584460284-Top-Categories.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/dfec05e0-5ff9-438b-9277-d54b580609e61661849768365-Quicklinks_Watches.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/bd53d831-b1d4-41a8-8279-727a2f814f4b1661849768275-Quicklinks_TrackPants.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/b32df59e-10f5-486d-997a-4bfb18eb23c41661849768169-Quicklinks_Skincare.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/d8dcb526-da27-445a-9592-73accd869af71661849767992-Quicklinks_GroomingEssentials.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/46dd51bc-a7d0-459a-9993-6de9a3402c221661849767984-Quicklinks_Fragrances.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/428ec16d-4dc2-4e2b-9d6f-66d44432744f1661849768106-Quicklinks_KurtasW.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/29d8d21c-6e84-42da-b8d8-d35bde9894b71661849768098-Quicklinks_KurtaSetsW_.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/75636b6c-4ea2-4560-a3a1-bbec78c84d711661849768263-Quicklinks_Tops_Tunics.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/4584e9ea-fa8d-46d9-ac28-f1311d5f5c051661849768145-Quicklinks_Sarees.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/6b2d2276-0e16-45bc-beca-0a6d9d8da99d1661849768039-Quicklinks_Jeans.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/bbd093ae-b85c-409a-973e-7acf8c6ccd251661849767896-Quicklinks_Bedsheets.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/2aad35b6-a997-477e-8b60-ada3d44f4c301661849768060-Quicklinks_Jewellery.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/dc9c2cb2-d212-4f57-a8c7-9b5d47ddbf8b1661849768254-Quicklinks_Tops_Tees.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/fd8a1bd6-14ca-4526-a82a-b29b459137091661849767883-Quicklinks_Activewear.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/04596be3-2483-475a-80a7-975867df2ebf1661849767914-Quicklinks_Bras_Briefs.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/a8e4c4f4-2c6b-49bf-b4c2-dd4a0a7c89671661849768177-Quicklinks_sleepwear.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/669d06e0-ed79-4bb7-b7de-f5249e943a641661849767977-Quicklinks_FormalShoes.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/07fed49e-588d-42de-b531-8868bc0c36221661849767963-Quicklinks_Flip-Flops.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/0e390dea-5807-49f5-8c26-9fe2fb7ed9711661849768018-Quicklinks_Heels.jpg",
    "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/30/5f8afb38-e0a7-4fff-ba12-b1e68ec594541661849767955-Quicklinks_Flats.jpg",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/9425bd4f-7ca2-4b7d-b458-2f7e10dec7101663591409913-Top-Brands-At-Best-Prices.jpg",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/f84aa73b-016d-47ff-b7ee-0d88740cce411663322873559-image_png468497170.png",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/2/a92c9bfb-fe39-4a09-888a-002beccdedde1662140575414-roadster-knk-t-shirts-199.png",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/a3b5f56c-738a-4903-9702-ec56175537a51661686019162-Wrogn--Nautica-0-3.jpg",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/2/f0eb8cd5-ce18-41bc-86c6-6bb97b818f451662140575395-mast-harbour-hrx-t-shirts-249.png",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/16/48bdddee-df58-45b2-8389-1d60b57d8ba91663322647458-image_png_1245756044.png",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/e2ed1453-2b07-4c05-a17e-283fbbac17271661686019111-Roadster-0-6.jpg",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/2523fbc2-40c3-4874-92b5-b6832fc6bb711661686018991-M-H--H-N-0-7.jpg",
    "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/8/28/fa06e39c-206a-4706-b125-684f9d5e059c1661686018944-HRX--Crew-street-0-9.jpg",
    "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/3e4b1000-7f2a-4f5b-87ef-c23ec6b085041663584150362-Shop-By-Category.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/8a205328-0ada-40ac-94f2-6f3faf814eb01663569626712-Shop-by-Category_02.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/0fe64af3-b495-469d-8c3f-987d062de8f41663569626723-Shop-by-Category_03.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/2c674465-86c8-4735-b875-f140b6988be81663569626730-Shop-by-Category_04.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/8a761d33-e396-4b0b-95b3-0745e187b5181663569626737-Shop-by-Category_05.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/da6668e6-8ec9-47de-b63a-ff73164037d21663569626743-Shop-by-Category_06.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/b249a16b-4fa4-404d-9a5f-d8f93c1d018b1663584590866-Shop-by-Category_07.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/e124657c-56c3-4085-9eb5-bc48d4de108d1663569626756-Shop-by-Category_08.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/31ac47c9-0fa1-44b8-9da4-240d10dbf9d91663569626762-Shop-by-Category_09.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/f3d28c41-352a-4f5d-942f-e49d877627d61663569626769-Shop-by-Category_10.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/018ad650-e0bc-4c97-919e-e1bd1c6550fa1663569626775-Shop-by-Category_11.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/cd81e2b9-570c-4e58-997a-b536eb3e6d6b1663569626782-Shop-by-Category_12.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/cc76969a-ec7f-4067-9396-6c51df936c751663569626788-Shop-by-Category_13.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/660c5651-b928-4dbd-a948-d827a42a79131663569626794-Shop-by-Category_14.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/bd9d47df-2e41-4ff1-9d39-fd39f48ccc111663569626801-Shop-by-Category_15.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/927fd999-1e91-4385-be84-47613e6287ac1663569626808-Shop-by-Category_16.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/57bd3ac2-cd14-4f96-8d71-29ceeafa5aae1663569626815-Shop-by-Category_17.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/b43b8010-e661-4266-b6eb-c9b69844a97f1663569626822-Shop-by-Category_18.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/e0c95680-eb5f-4097-99be-110c4a0664261663569626829-Shop-by-Category_19.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/f27527a4-16d8-44ad-a763-0f63de633fb61663569626836-Shop-by-Category_20.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/f08abd19-8f36-4607-960a-2f31f62e11351663569626843-Shop-by-Category_21.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/cdcf84dc-1701-4b01-b7ce-d9c54bd861731663569626850-Shop-by-Category_22.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/099a09c6-ea35-4e3f-94cc-b189bbce48ac1663569626857-Shop-by-Category_23.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/46b30a7d-2ff2-45e2-a9f3-f2852cbc73e11663569626864-Shop-by-Category_24.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/8b749f6a-be69-44c1-9251-abdd54a0acd21663569626872-Shop-by-Category_25.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/5c674c2d-c37c-49a5-b303-0797da57e4641663584738763-Shop-by-Category_26.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/159109a0-fb84-42d4-b0d2-fe3c7fc6efbe1663569626886-Shop-by-Category_27.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/39f1dfb4-2a0a-4c34-837a-596aa5d0fd0c1663569626893-Shop-by-Category_28.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/14d6acea-b623-4a3c-8fd2-6fdd826079871663569626900-Shop-by-Category_29.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/8d36add5-9feb-4c04-94bb-f08ccf3411631663569626908-Shop-by-Category_30.jpg",
    "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/e2b852a2-13bf-4fbf-8c1b-c417138601ec1663569626915-Shop-by-Category_31.jpg",
    "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/1e208548-82bd-470e-b52b-4a0a971648d61663569626923-Shop-by-Category_32.jpg",
    "https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2022/9/19/fd937cda-0def-45ac-901b-04c1dc4830191663584950048-Shop-by-Category_33.jpg"
])

  return (
    <Box>
    <InvitePromo />
      <Grid gridTemplateColumns='repeat(4, 1fr)'>
        {
          images.slice(0, 12).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(2, 1fr)' >
        {
          images.slice(12, 14).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {
          images.slice(14, 15).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(10, 1fr)'>
        {
          images.slice(15, 25).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {
          images.slice(25, 26).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(15, 1fr)'>
        {
          images.slice(26, 41).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {
          images.slice(41, 42).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(10, 1fr)'>
        {
          images.slice(42, 62).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {
          images.slice(62, 63).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(8, 1fr)'>
        {
          images.slice(63, 71).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(1, 1fr)'>
        {
          images.slice(71, 72).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Grid gridTemplateColumns='repeat(6, 1fr)'>
        {
          images.slice(72, 102).map((image, index) => (
            <img src={image} key={index} />
          ))
        }
      </Grid>
      <Footer />
    </Box>
  )
}

export default Home