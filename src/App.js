import Lab1pic from './Lab1.png';
import React from 'react';

const rawHTML = `
<div>
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>What’s in a name? Diabetes Naming Dilemma</title>
    <style>
        .two-column-layout {
            display: flex;
            justify-content: space-between;
        }
        .column {
            flex: 1;
            padding: 10px;
        }
    </style>
</head>
<body>
    <article>
        <h1>What’s in a name?</h1>
        <p>Shakespeare famously raised that question in “Romeo and Juliet” 
            where Juliet dismisses the importance of a 
            name: “That which we call a rose by any other name would smell as sweet”
        </p>
        <p>And yet, the name where Juliet dismisses the importance of a 
            name: “That which we call a rose by any other name 
            would smell as sweet” contributed to their tragic deaths.
        </p>
        <p>In medicine, misunderstandings about names can have similarly fatal consequences.
        </p>

        <div class="two-column-layout">
            <div class="column">
                <p>This is content for the first column.</p>
            </div>
            <div class="column">
                <p>This is content for the second column.</p>
            </div>
        </div>

        <hr> 

        <address>
            <strong>Detlef Bockenhauer</strong><br>
            <!-- ... the rest of the contact info ... -->
                1 UCL Department of Renal Medicine and Paediatric 
                Nephrology Unit, Great Ormond Street Hospital for Children 
                NHS Foundation Trust, London, UK
                2 Department of Genetics, University Medical Centre 
                Groningen, Groningen, The Netherlands
                3 Nephrology Service, Departments of Medicine, 
                Pharmacology and Physiology, University of Montreal, 
                Montreal, QC, Canada
        </address>

        <h2>Should we rename the diabetes insipidus conditions?</h2>

        <p>The results of this patient survey are indeed alarming...</p>
        <p>While based on self-reporting by patients rather than a 
            review of documented hospital records, there is no reason 
            to assume that patients would exaggerate or distort their 
            experiences. It is, of course, possible that patients who 
            have experienced mismanagement may be more likely to 
            participate in such a survey as those who have not experienced 
            any complications, leading to biased results. Yet, 
            our own experience with nephrogenic diabetes insipidus 
            suggests that the proportion of patients reporting confusion of 
            their condition with diabetes mellitus by health 
            care professionals is probably realistic. Reluctance to publicly 
            declare errors leads to an obvious publication bias 
            so that reports of such confusion and the resulting mismanagement 
            are rarely, if ever reported in the literature. 
            Presumably, in most cases, the consequences are minor, 
            such as repeated unnecessary blood sugar testing, as also 
            reported by the patients with central diabetes insipidus 
            in the survey. But in other cases, the consequences may 
            be more severe, such as failure to obtain electrolytes to 
            detect and manage hypernatraemic dehydration or treatment with 
            inappropriate intravenous fluids.
        </p>

            <p>Renaming of diabetes insipidus should be carefully 
                considered, as it is a well-established medical term. 
                The first description dates back to 1794, when Johann 
                Peter Frank of the University of Pavia described patients 
                characterized by “long continued abnormally increased 
                secretion of nonsaccharine urine which is not caused by 
                a diseased condition of the kidneys” and introduced the 
                term “diabetes insipidus” [5]. This term was picked up in 
                1892 by McIlraith and has been in clinical use, textbooks 
                and publications ever since, with “diabetes” referring to 
                polyuria and “insipidus” to the tasteless nature of the 
                urine that distinguished it from the sweet tasting polyuria 
                of “diabetes mellitus” [4]. Yet, with increasing longevity 
                and affluence, the prevalence of diabetes mellitus has 
                skyrocketed and consequently has become synonymous 
                with just “diabetes”. Given this synonymity, misunderstandings 
                regarding “diabetes insipidus” are probably 
                inevitable with a high risk of patient harm.
            </p>

                <p>diabetes insipidus, which make sense, as they do reflect 
                    the pathophysiology [5]. But, of course, the issue is complicated 
                    by the fact that the involved hormone has at least 
                    three different names: “vasopressin”, “arginine vasopressin” 
                    and “antidiuretic hormone”. Personally, we would 
                    prefer “antidiuretic hormone deficiency/resistance”, as 
                    the pathophysiology primarily concerns the antidiuretic 
                    effects of the hormone, mediated by the type 2 receptor 
                    AVPR2 in the kidney collecting duct cells, rather than the 
                    vasopressor effects, mediated by AVPR1.
                    The critical and obvious questions are the following: 
                    Would renaming the condition really decrease the frequency of 
                    mismanagement? Would a health care professional be more aware 
                    of the diagnosis and its implications, if a patient told them 
                    that they have a diagnosis 
                    of antidiuretic hormone resistance? The knowledge and 
                    understanding of health care practitioners of such a rare 
                    condition will probably be just as limited, even if the 
                    name clearly reflects the pathophysiology. But the risk 
                    of confusion with “diabetes” is abolished and, when 
                    faced with an unknown rare diagnosis, the health care 
                    professional may be more inclined to look this up or 
                    consult a specialist.
                </p>
        <!-- ...continue with other paragraphs... -->


        <h2>What would be a better name?</h2>

        <p>The “Working Group for Renaming Diabetes Insipidus” has suggested the terms...</p>
        <p>he “Working Group for Renaming Diabetes Insipidus” has suggested the terms “vasopressin deficiency” 
            for cranial and “vasopressin resistance” for nephrogenic diabetes insipidus, which make sense, as they do reflect 
            the pathophysiology [5]. But, of course, the issue is complicated by the fact that the involved hormone has at least 
            three different names: “vasopressin”, “arginine vasopressin” and “antidiuretic hormone”. Personally, we would 
            prefer “antidiuretic hormone deficiency/resistance”, as 
            the pathophysiology primarily concerns the antidiuretic 
            effects of the hormone, mediated by the type 2 receptor 
            AVPR2 in the kidney collecting duct cells, rather than the 
            vasopressor effects, mediated by AVPR1.
        </p>
        
        <p>The critical and obvious questions are the following: 
            Would renaming the condition really decrease the frequency 
            of mismanagement? Would a health care professional be more 
            aware of the diagnosis and its implications, if a patient 
            told them that they have a diagnosis of antidiuretic hormone 
            resistance? The knowledge and 
            understanding of health care practitioners of such a rare 
            condition will probably be just as limited, even if the 
            name clearly reflects the pathophysiology. But the risk 
            of confusion with “diabetes” is abolished and, when 
            faced with an unknown rare diagnosis, the health care 
            professional may be more inclined to look this up or 
            consult a specialist</p>

        <h2>Conclusion:</h2>

        <p>We therefore propose that like our endocrinology colleagues, we should survey our patients with nephrogenic 
            diabetes insipidus and patient advocacy organisations 
            (such as the <a href="https://ndif.org/">NDI foundation</a>), as well 
            as our nephrology colleagues, through our national 
            and international professional societies, with respect 
            to experiences of diagnostic confusion with the term 
            “diabetes” and their thoughts and ideas about renaming 
            the condition.
        </p>
         
        <p> We believe that if supported by those surveyed, and a consensus is built, replacement of “DI” by 
            the terms “ADH Deficiency” and “ADH Resistance” will 
            benefit patients, their families and health care providers. 
            <blockquote>
            For our dilemma is unlike that of Shakespeare’s Juliet: 
            </blockquote>
            She dismissed the importance of different names for the 
            same thing, as it was the characteristics that mattered 
            (“That which we call a rose by any other name would 
            smell as sweet”). In contrast, we have the problem of 
            having the same name for two different conditions, with 
            clearly different characteristics: That which we call diabetes (insipidus) does not taste sweet!
        </p>


        <h2>References:</h2>
        <ol>
            <li>
                Bockenhauer D, Bichet DG. (2017) Nephrogenic diabetes insipidus. 
                Curr Opin Pediatr. 29:199–205. 
                <a href="https://doi.org/10.1097/MOP.0000000000000473">https://doi.org/10.1097/MOP.0000000000000473</a>
            </li>
            <li>
                Bockenhauer D, Bichet DG. (2015) Pathophysiology, diagnosis 
                and management of nephrogenic diabetes insipidus. 
                Nat Rev Nephrol. 11:576–588. 
                <a href="https://doi.org/10.1038/nrneph.2015.89">https://doi.org/10.1038/nrneph.2015.89</a>
            </li>
            <li>
                Atila C, Loughrey PB, Garrahy A, Winzeler B, Refardt J, Gildroy P, 
                Hamza M, Pal A, Verbalis JG, Thompson CJ, Hemkens LG, Hunter SJ, 
                Sherlock M, Levy MJ, Karavitaki N, Newell-Price J, Wass JAH, 
                Christ-Crain M. (2022) Central diabetes insipidus from a patient’s 
                perspective: management, psychological co-morbidities, and renaming 
                of the condition: results from an international web-based survey. 
                Lancet Diabetes Endocrinol. 10:700–709.
                <a href="https://doi.org/10.1016/S2213-8587(22)00219-4">https://doi.org/10.1016/S2213-8587(22)00219-4</a>
            </li>
            <li>
                McIlraith CH. (1892) Notes on some cases of diabetes insipidus 
                with marked family and hereditary tendencies. Lancet. 140:767–768. 
                <a href="https://doi.org/10.1016/S0140-6736(01)87712-6">https://doi.org/10.1016/S0140-6736(01)87712-6</a>
            </li>
            <li>
                Working Group for Renaming Diabetes Insipidus; Arima H, Cheetham T, 
                Christ-Crain M, Cooper D, Gurnell M, Drummond JB, Levy M, McCormack AI, 
                Verbalis J, Newell-Price J, Wass JAH. (2022) Changing the name of 
                diabetes insipidus: a position statement of The Working Group for 
                Renaming Diabetes Insipidus. Endocr J. 
                <a href="https://doi.org/10.1507/endocrj.EJ20220831">https://doi.org/10.1507/endocrj.EJ20220831</a>
            </li>
        </ol>


        <p>Publisher’s note Springer Nature remains neutral with regard to 
           jurisdictional claims in published maps and institutional afliations.
        </p>
    </article>
    
    <!-- Addendum Section -->
    <article>
    <section>
    <h2>Addendum: Explanation of HTML Element Choices</h2>
    <ol>
        <li><strong>`<!DOCTYPE html>`</strong>: This declaration defines the document to be HTML5. It helps the browser to display the web page correctly.</li>

        <li><strong>`<html lang="en">`</strong>: This is the root element of the HTML document and specifies the language as English. It helps in accessibility and search engine optimization.</li>

        <li><strong>`<head>`</strong>: This container holds meta-information, links to stylesheets, and other resources. It's not directly visible to the user but vital for functionality and metadata.</li>

        <li><strong>`<meta charset="UTF-8">`</strong>: This meta tag defines the character set for the document, allowing the browser to display text correctly.</li>

        <li><strong>`<meta name="viewport">`</strong>: Important for responsive web design. It makes sure the page fits the screen of the device viewing it.</li>

        <li><strong>`<h1>`, `<h2>`, `<h3>`</strong>: These are header tags, denoting different levels of headings in the document. They provide structure and help in accessibility.</li>

        <li><strong>`<address>`</strong>: Specifies contact information for the author or owner of the document or article.</li>

        <li><strong>`<section>`</strong>: Represents a standalone section of content. Helps in structuring the document and making it more accessible.</li>

        <li><strong>`<p>`</strong>: Represents a paragraph of text.</li>

        <li><strong>`<figure>` and `<figcaption>`</strong>: Used together, they represent content like illustrations, diagrams, photos, or code listings alongside a caption.</li>

        <li><strong>`<a href="...">`</strong>: Represents a hyperlink, which can lead to another webpage or can be used to create mailto links, as seen in the example.</li>

        <li><strong>`<ol>`</strong>: Represents an ordered list. Perfect for listing references or other sequentially important items.</li>
    </ol>
    </section>
    </article>
    
</body>
</html>

</div>
`;

function App() {
  
  return (
    <div style={container}>
      <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
    </div>
  );
}

export default App;

// Styling
const container = {
  width: 500,
  margin: '50px auto'
}
