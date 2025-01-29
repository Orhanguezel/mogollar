import { motion } from "framer-motion";
import {
  PageContainer,
  GradientBackground,
  HistoryParagraph,
  Highlight,
  Title,
  CenteredGifContainer,
} from "./StyledComponents";

function History() {
  return (
    <PageContainer>
      <GradientBackground />

      {/* Başlık */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Moğollar</Title>
      </motion.div>

      {/* Paragraflar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, staggerChildren: 0.3 }}
      >
        <HistoryParagraph>
          Moğollar, <Highlight>1967</Highlight> yılında Türkiye'de kurulan ve{" "}
          <Highlight>Anadolu Rock</Highlight> müziğinin öncülerinden biri
          olarak kabul edilen bir müzik grubudur. Geleneksel Türk müziği ile
          rock müziğini harmanlayarak unutulmaz eserler üretmişlerdir. Kurucu
          üyelerinden <Highlight>Cahit Berkay</Highlight> ve{" "}
          <Highlight>Taner Öngür</Highlight> gibi isimler, grup tarihinin
          önemli bir parçasını oluşturmaktadır.
        </HistoryParagraph>
        <HistoryParagraph>
          Grup, kariyerine başladığı ilk yıllarda{" "}
          <Highlight>Anadolu Pop</Highlight> adını verdikleri özgün bir tarzla
          dikkat çekti. <Highlight>1973</Highlight> yılında yayımladıkları{" "}
          <Highlight>Anadolu Pop</Highlight> albümü, bu türün en iyi
          örneklerinden biri olarak kabul edilmektedir. Yıllar içinde farklı
          müzisyenlerin de gruba katılmasıyla tarzını zenginleştiren Moğollar,
          birçok ödül kazanmış ve Türkiye dışında da tanınmıştır.
        </HistoryParagraph>
        <HistoryParagraph>
          <Highlight>2004</Highlight> yılında yayımlanan{" "}
          <Highlight>Düm Tek</Highlight> albümü, grubun modern dönem
          eserlerini içerirken, farklı müzik tarzlarını bir araya getirdiği
          için büyük beğeni toplamıştır. Moğollar, hem geçmişte hem de
          günümüzde Türk müziğine ilham kaynağı olmaya devam etmektedir.
        </HistoryParagraph>
        <HistoryParagraph>
          Bugün hâlâ aktif bir şekilde konserler veren ve yeni eserler üreten
          grup, Türkiye'nin müzik tarihinde kalıcı bir iz bırakmıştır.
        </HistoryParagraph>
      </motion.div>

      {/* Ortada konumlanan GIF */}
      <CenteredGifContainer>
        <motion.img
          src="https://cdn.pixabay.com/animation/2023/11/11/05/12/05-12-33-596_512.gif"
          alt="History Animation"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
      </CenteredGifContainer>
    </PageContainer>
  );
}

export default History;
