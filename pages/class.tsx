import React from 'react'
import PageTemplate from '../components/templates/PageTemplate';
import Head from 'next/head';
import ProgramCard, {ProgramCards} from '../components/molecules/ProgramCard';
import Container from '../components/templates/Container';
import Text from '../components/atoms/Text';
const Class = () => {
    const Courses:ProgramCards[] = [
        {
            imageUrl : "/images/jahitnew.svg", 
            title: "Kursus Menjahit (Tingkat Dasar)", 
            description: "Dalam kursus ini, peserta kursus akan mempelajari dasar-dasar menjahit dan memperoleh keterampian serta kepercayaan diri untuk memulai menjahit dan membuat beberapa produk. Kursus ini akan membahas berbagai jenis kain dan cara memilih kain yang tepat. Peserta kursus akan belajar cara memotong kain secara akurat dan cara menata dan menyematkan pola.", 
            meet: "62 Pertemuan", 
            month: "5 Bulan", 
            totalMember: "+36"
        },
        {
            imageUrl : "/images/jahitmid.svg", 
            title: "Kursus Menjahit (Tingkat Terampil)", 
            description: "Dalam kursus ini, peserta kursus akan mengembangkan keterampilan dan pengetahuan yang telah peroleh di kelas menjahit dasar kami dan meningkatkan kemampuan menjahit. Kita akan mulai dengan meninjau dasar-dasar menjahit, termasuk cara memasang benang pada mesin, menggulung gelendong, dan membuat jahitan dasar. Kami juga akan membahas teknik menjahit yang lebih canggih, seperti memasukkan ritsleting, menambahkan kancing dan kancing, dan bekerja dengan berbagai jenis kain dan pola.", 
            meet: "43 Pertemuan", 
            month: "4 Bulan", 
            totalMember: "+46"
        },
        {
            imageUrl : "/images/jahitexpert.svg", 
            title: "Kursus Menjahit (Tingkat Mahir)", 
            description: "Dalam kursus ini, peserta kursus akan mengembangkan keterampilan dan pengetahuan yang diperoleh di kelas menjahit terampil kami dan membawa keahlian jahitan ke tingkat profesional. Kami akan mulai dengan meninjau dasar-dasar menjahit dan teknik yang lebih maju, seperti menyesuaikan pola dan bekerja dengan berbagai jenis kain dan pola. Kami juga akan membahas teknik konstruksi tingkat lanjut, seperti teknik menjahit couture, lapisan, dan interfacing, dan bekerja dengan kain yang menantang.", 
            meet: "30 Pertemuan", 
            month: "6 Bulan", 
            totalMember: "+12"
        },
        {
            imageUrl : "/images/designnew.svg", 
            title: "Kursus Design Grafis (Tingkat Dasar)", 
            description: "Dalam kursus ini, peserta kursus akan mempelajari prinsip dan teknik dasar desain grafis dan mengembangkan keterampilan dan pengetahuan untuk membuat desain yang memukau secara visual. Kursus ini akan dimulai dengan memperkenalkan elemen dasar desain, seperti teori warna, tipografi, dan komposisi. Anda akan belajar bagaimana menggunakan elemen-elemen ini untuk membuat desain yang kohesif dan efektif.", 
            meet: "42 Pertemuan", 
            month: "4 Bulan", 
            totalMember: "+43"
        },
        {
            imageUrl : "/images/designmid.svg", 
            title: "Kursus Design Grafis (Tingkat Terampil)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas desain grafis dasar kami dan meningkatkan keterampilan desain ke tingkat berikutnya.", 
            meet: "58 Pertemuan", 
            month: "3 Bulan", 
            totalMember: "+78"
        },
        {
            imageUrl : "/images/designexpert.svg", 
            title: "Kursus Design Grafis (Tingkat Mahir)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas desain grafis terampil kami dan membawa keterampilan desain ke tingkat profesional. Kami akan mulai dengan meninjau dasar-dasar desain dan konsep yang lebih maju, seperti tata letak, branding, dan teori desain. Kami juga akan membahas teknik lanjutan dalam Adobe Creative Suite, termasuk manipulasi foto, grafik vektor, dan teknik tata letak lanjutan.", 
            meet: "34 Pertemuan", 
            month: "2 Bulan", 
            totalMember: "+18"
        },
        {
            imageUrl : "/images/fotonew.svg", 
            title: "Kursus Fotografi (Tingkat Dasar)", 
            description: "Dalam kursus ini, peserta kursus akan mempelajari dasar-dasar fotografi dan memperoleh keterampilan serta pengetahuan untuk mengambil foto yang memukau. Kursus ini akan dimulai dengan memperkenalkan peserta kursus pada berbagai jenis kamera dan berbagai fiturnya. Anda akan belajar cara menyusun foto dengan benar, termasuk aturan sepertiga dan garis terdepan.", 
            meet: "32 Pertemuan", 
            month: "2 Bulan", 
            totalMember: "+32"
        },
        {
            imageUrl : "/images/fotomid.svg", 
            title: "Kursus Fotografi (Tingkat Terampil)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas fotografi dasar kami dan meningkatkan keterampilan desain ke tingkat berikutnya.", 
            meet: "49 Pertemuan", 
            month: "4 Bulan", 
            totalMember: "+87"
        },
        {
            imageUrl : "/images/fotoexpert.svg", 
            title: "Kursus Fotografi (Tingkat Mahir)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas fotografi terampil kami dan meningkatkan keterampilan desain ke tingkat berikutnya.", 
            meet: "45 Pertemuan", 
            month: "4 Bulan", 
            totalMember: "+23"
        },
        {
            imageUrl : "/images/aptnew.svg", 
            title: "Kursus Apt Kantor (Tingkat Dasar)", 
            description: "Dalam kursus ini, peserta kursus akan mempelajari keterampilan dan pengetahuan dasar yang diperlukan untuk menggunakan rangkaian aplikasi Microsoft Office secara efektif. Kursus ini akan dimulai dengan memperkenalkan Anda ke rangkaian Microsoft Office dan berbagai aplikasinya, termasuk Word, Excel, PowerPoint, dan Outlook. Anda akan mempelajari cara menavigasi program ini dan menggunakan fitur dasarnya.", 
            meet: "46 Pertemuan", 
            month: "4 Bulan", 
            totalMember: "+89"
        },
        {
            imageUrl : "/images/aptmid.svg", 
            title: "Kursus Apt Kantor (Tingkat Terampil)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas apt kantor dasar kami dan meningkatkan keterampilan desain ke tingkat berikutnya.", 
            meet: "39 Pertemuan", 
            month: "3 Bulan", 
            totalMember: "+102"
        },
        {
            imageUrl : "/images/aptexpert.svg", 
            title: "Kursus Apt Kantor (Tingkat Dasar)", 
            description: "Dalam kursus ini, peserta kursus akan membangun keterampilan dan pengetahuan yang diperoleh di kelas apt kantor terampil kami dan meningkatkan keterampilan desain ke tingkat berikutnya.", 
            meet: "32 Pertemuan", 
            month: "3 Bulan", 
            totalMember: "+45"
        },
    ]
  return (
    <PageTemplate title='KELAS - LKP MANDIRI'>
        <Head>
            <meta content='LKP MANDIRI' name='title' />
            <meta content='Beberapa kelas di lkp mandiri' name='description' />
            <link rel="icon" href="/images/Logo.svg" />
        </Head>
        <Container>
        <section className='w-full  h-fit min-h-screen py-8'>
            <Text textStyle='TitleTwo' value='Program Kursus LKP Mandiri' />
            <div className='lg:grid-cols-3 grid-cols-1 grid place-content-center gap-4 mt-7'>
            {Courses.map((course) => (
                <ProgramCard 
                    key={course.imageUrl}
                    imageUrl={course.imageUrl}
                    title={course.title}
                    month={course.month}
                    description={course.description}
                    totalMember={course.totalMember}
                    meet={course.meet}
                />
            ))}
            </div>
        </section>
        </Container>
    </PageTemplate>
  )
}

export default Class