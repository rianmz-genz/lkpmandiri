import React from "react";
import Container from "../templates/Container";
import Text from "../atoms/Text";

const DescriptionDetailPage = () => {
  return (
    <Container>
      <aside className="lg:w-8/12 w-full mt-4 px-3 py-4 h-fit bg-palatinelight space-y-3 lg:space-y-6 rounded-lg">
        <Text textStyle="TitleTwo" value="Kelas Menjahit (Tingkat Dasar)" />
        <Text
          textStyle="Description"
          value="Selamat datang di Kelas Menjahit (Tingkat Dasar) LKP Mandiri. Pada kursus ini, kamu akan mempelajari dasar-dasar menjahit dan memperoleh keterampilan dan kepercayaan diri untuk memulai menjahit."
        />
        <Text
          textStyle="Description"
          value="Pada kursus ini, kami akan mengajarkan kamu berbagai jenis mesin jahit, fitur-fitur mesin jahit, dan cara menggunakannya. Kamu juga akan belajar cara memasang jarum jahit dan membuat jahitan dasar."
        />
        <Text
          textStyle="Description"
          value="Selanjutnya, kami akan membahas berbagai jenis kain dan cara memilih kain yang tepat. Kamu juga akan belajar cara mengukur dan memotong kain secara akurat dan cara menata dan menyematkan pola."
        />
        <Text
          textStyle="Description"
          value="Kursus ini juga akan membahas dasar-dasar menjahit tangan, termasuk cara mengikat simpul, membuat tusuk lari, dan menyelesaikan jahitan."
        />
        <Text
          textStyle="Description"
          value="Sepanjang kursus, kamu akan mendapat pelatihan keterampilan dengan membuat produk-produk seperti baju anak, rok/dress, gaun pesta, dan masih banyak lagi."
        />
        <Text
          textStyle="Description"
          value="Di akhir kursus, kamu akan memiliki pengetahuan serta keterampilan untuk memulai menjahit. Kamu juga akan mendapat sertifikat sebagai tanda bahwa kamu telah memiliki keterampilan menjahit tingkat dasar yang bisa kamu gunakan sebagai dokumen pendukung saat ingin melamar kerja, atau mendirikan tempat menjahit."
        />
      </aside>
    </Container>
  );
};

export default DescriptionDetailPage;
