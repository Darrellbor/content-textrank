import React, { Component } from "react";

import Layout from "../../components/Layout";
import ContentWidget from "../../components/ContentWidget";

class Slides extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col-md-4">
            <ContentWidget innerContent="01" description="Problem Set">
              Text summarization refers to the technique of shortening the long
              pieces of texts. The main aim of text summarization is to create a
              coherent and fluent summary consisting of all the main points from
              the text.
              <br />
              <br />
              Automatic text summarization is a very common problem in Natural
              Language Processing. The semantic understanding of the human
              language text exhibited by the summarization is the holy grail for
              the Natural Language Processing. But even extracting a “good
              understanding” from human language is not something we currently
              count on text summarization or for that matter any other thing
              under Natural Language Processing.
              <br />
              <br /> However, there exists an array of techniques which can help
              in summarization with justifiable semantic meaning and
              summarization of the original text. <br />
              <br />
            </ContentWidget>
          </div>

          <div className="col-md-4">
            <ContentWidget innerContent="02" description="Solution">
              There are few ways of going about classifying text summarization
              techniques, as can be seen in figure below.
              <br />
              <br />
              <img
                src="https://miro.medium.com/max/2316/1*KJTqPHfymWE1KTAKPajeYA.png"
                alt="Diagram describing text summarization"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <div className="img__descrip" style={{ textAlign: "center" }}>
                Diagram describing text summarization -- 
                <a href="https://miro.medium.com/max/2316/1*KJTqPHfymWE1KTAKPajeYA.png">
                   source
                </a>
              </div>
              <br />
              <br />
              We will talk about text summarization based on the Output Type.
              From the above figure; there are two techniques which can be
              employed based on output type:
              <br />
              <ol>
                <li>Abstractive summarization</li>
                <li>Extractive summarization</li>
              </ol>
              <br />
              Before we delve into the techniques to summarizing text i would
              love to elaborate on the groups of text summarization and this
              includes: <br />
              <ol>
                <li>Indicative summarization</li>
                <li>Informative summarization</li>
              </ol>
              <br />
              Indicative summarization is a situation whereby you get the
              summary of the content in as few words as possible conveying a
              basic understanding of what is contained in the text. <br />
              <br />
              Informative summarization is a situation whereby you get a more
              detailed summary of the content rather than just a brief it hopes
              to give you more insights into what is contained in the text.{" "}
              <br />
              <br />
              <ol>
                <li>
                  <b>Abstractive summarization:</b>
                  <br />
                  <br />
                  This techniques interprets text and generates a new summary
                  text. This technique is equivalent to human reading a text and
                  generating its summary by hand. This techniques usually
                  doesn’t contain text which is already present in original
                  text. It understands the meaning or the idea of the text and
                  generate a precise summary in its own language covering all
                  the main points.
                </li>
                <br />

                <li>
                  <b>Extractive summarization:</b>
                  <br />
                  <br />
                  As the name suggests itself, it extracts sentences from the
                  original text piece itself and append it in the summary text.
                  The extraction of sentences is done on the basis of its
                  significance for the original text. All the sentences gets
                  their significance score, and some topmost sentences makes
                  into the summary text. This technique doesn’t generate any new
                  text for summary as abstractive technique does.
                  <br />
                  <br />
                  Extractive technique seems so naive upon reading for the first
                  time, and it might even raise questions about its accuracy.
                  Inspite of this, most summarization tools existing today
                  employs extractive technique and enjoys a good accuracy rate.
                </li>
              </ol>
            </ContentWidget>
          </div>

          <div className="col-md-4">
            <ContentWidget innerContent="03" description="How It Works">
              <img
                src="https://miro.medium.com/max/3110/1*UJZBGGmjxbeLA0SsVC18lw.png"
                alt="Extractive Text Summarizer Model Pipeline"
                style={{ width: "100%" }}
              />
              <br />
              <br />
              <div className="img__descrip" style={{ textAlign: "center" }}>
              Graphical Representation of Extractive Text Summarizer Model Pipeline -- 
                <a href="https://miro.medium.com/max/3110/1*UJZBGGmjxbeLA0SsVC18lw.png">
                   source
                </a>
              </div>
            </ContentWidget>
          </div>

          <div className="col-md-4">
            <ContentWidget innerContent="04" description="Demo">
              Now let's try out the summarizer demo by requesting a summary of
              the text <br />
              <br /> " Extractive summarization techniques produce summaries by
              choosing a subset of the sentences in the original text. These
              summaries contain the most important sentences of the input. Input
              can be a single document or multiple documents. (Allahyari et al.,
              2017) This classification of summarization relies on the content
              of the document(s) to generate the summary. In order words, it
              reads through a document and finds a way to group context-based
              words or sentences and draws or infers its summary based on what
              can be seen and joined. This process can be divided into two
              steps: Pre Processing step and Processing step. Pre Processing is
              a structured representation of the original text. It usually
              includes
              <br />
              <br /> (a) Sentences boundary identification. In English, sentence
              boundary is identified with the presence of dot at the end of the
              sentence.
              <br />
              <br /> (b) Stop-Word Elimination—Common words with no semantics{" "}
              <br />
              <br /> (c) Stemming—The purpose of stemming is to obtain the stem
              or radix of each word, which emphasize its semantics. In
              Processing step, features influencing the relevance of sentences
              are decided and calculated and then weights are assigned to these
              features using weight learning method. The final score of each
              sentence is determined using Feature-weight equation. Top-ranked
              sentences are selected for the final summary. (Babar, Tech-Cse and
              Rit, 2013) <br />
              <br />
              Input document → sentences similarity → weight sentences → select
              sentences with higher rank. "
            </ContentWidget>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Slides;
